# Deployment Plan - MS2025 Site Generator

## Entornos de Deployment

### 1. Local Development
**URL:** http://localhost:3000
**Propósito:** Desarrollo y testing local

```bash
npm install
npm run dev
```

**Validaciones:**
- Hot reload funcional
- Componentes se renderizan correctamente
- No errores en consola del navegador

---

### 2. Local Preview (Pre-deployment)
**URL:** http://localhost:4173
**Propósito:** Verificar build de producción localmente

```bash
npm ci
npm run build
npm run preview
```

**Validaciones:**
- Build completa sin errores
- Todos los assets se cargan correctamente
- _headers file presente en dist/
- Security headers visibles en Network tab (DevTools)
- Lighthouse score ≥ 85 (Desktop)

---

### 3. Staging (Cloudflare Pages)
**URL:** `https://<branch>.<project>.pages.dev`
**Branch:** `develop`, `claude/**`
**Propósito:** Testing pre-producción con URL pública

**Deployment automático vía GitHub Actions:**
```bash
git push origin develop
# O cualquier push a ramas claude/**
```

**Deployment manual:**
```bash
npm ci
npm run build
wrangler pages deploy dist --project-name=ms2025-generator --branch=staging
```

**Validaciones post-deploy:**
- [ ] URL de deployment accesible
- [ ] Security headers activos (verificar con curl o DevTools)
- [ ] CSP no bloqueando recursos necesarios
- [ ] Formulario wizard funcional (5 pasos)
- [ ] Generación de ZIP funcional
- [ ] Preview iframe funcional
- [ ] No errores en consola JavaScript
- [ ] Analytics trackers cargando (si configurados)

**Comandos de verificación:**
```bash
# Verificar headers de seguridad
curl -I https://<staging-url>

# Verificar CSP
curl -s -I https://<staging-url> | grep -i content-security

# Lighthouse remoto
lighthouse https://<staging-url> --preset=desktop --quiet
```

---

### 4. Production (Cloudflare Pages)
**URL:** `https://ms2025-generator.pages.dev` o dominio custom
**Branch:** `main`
**Propósito:** Aplicación en producción para usuarios finales

**Deployment:**
1. Merge a `main` después de code review
2. GitHub Actions ejecuta pipeline completo
3. Deployment automático a producción

**O deployment manual:**
```bash
git checkout main
git pull origin main
npm ci
npm run build
wrangler pages deploy dist --project-name=ms2025-generator --branch=main
```

**Validaciones post-deploy (CRÍTICAS):**
- [ ] URL de producción accesible
- [ ] Security headers activos y correctos
- [ ] HTTPS forzado (HSTS)
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] Core Web Vitals en verde (LCP, FID, CLS)
- [ ] Funcionalidad completa del wizard
- [ ] Generación y descarga de ZIPs
- [ ] Compatibilidad cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Responsive design en móviles
- [ ] No secretos expuestos en bundle
- [ ] Analytics funcionando (si aplicable)

**Smoke Tests:**
```bash
# Test 1: Página carga
curl -f https://ms2025-generator.pages.dev || echo "FAIL"

# Test 2: Assets cargan
curl -f https://ms2025-generator.pages.dev/assets/index-*.js || echo "FAIL"

# Test 3: Security headers presentes
curl -I https://ms2025-generator.pages.dev | grep -q "Content-Security-Policy" || echo "FAIL"
```

---

## Rollback Procedure

### Si deployment en Production falla:

**Opción 1: Rollback vía Cloudflare Dashboard**
1. Ir a Cloudflare Pages → Proyecto → Deployments
2. Encontrar último deployment exitoso
3. Click en "..." → "Rollback to this deployment"
4. Confirmar rollback

**Opción 2: Rollback vía Git**
```bash
# Identificar commit previo estable
git log --oneline -10

# Revertir a commit estable
git revert <commit-hash>
git push origin main

# GitHub Actions desplegará automáticamente la versión revertida
```

**Opción 3: Redeploy manual de versión previa**
```bash
git checkout <previous-stable-commit>
npm ci
npm run build
wrangler pages deploy dist --project-name=ms2025-generator --branch=main
```

**Post-Rollback:**
- Notificar al equipo del rollback
- Investigar causa del fallo en staging
- Crear issue en GitHub con detalles del problema
- No redeployar hasta que el issue esté resuelto y probado en staging

---

## Checklist Pre-Deployment a Production

Antes de hacer merge a `main`:

### Code Quality
- [ ] `npm run lint` pasa sin warnings
- [ ] `npm run build` completa exitosamente
- [ ] No console.log en código de producción
- [ ] No TODOs críticos pendientes

### Testing
- [ ] Testing manual en local preview
- [ ] Testing en staging con URL pública
- [ ] Probado en diferentes navegadores
- [ ] Probado en mobile y desktop

### Seguridad
- [ ] No secretos en código
- [ ] Security headers configurados
- [ ] npm audit sin vulnerabilidades críticas
- [ ] Dependencies actualizadas

### Performance
- [ ] Lighthouse score ≥ 85 en staging
- [ ] Bundle size ≤ 300 KB
- [ ] No recursos bloqueantes innecesarios

### Documentación
- [ ] README.md actualizado
- [ ] CHANGELOG.md con versión nueva
- [ ] docs/ actualizado si hay cambios en arquitectura

---

## Monitoring Post-Deployment

Después de deployment a producción:

**Primeras 15 minutos:**
- Verificar URL accesible
- Probar flujo completo de usuario
- Revisar errores en browser console
- Verificar Cloudflare Analytics (si disponible)

**Primeras 24 horas:**
- Monitorear Cloudflare Analytics para tráfico y errores
- Revisar GitHub Issues para reportes de usuarios
- Verificar Core Web Vitals en PageSpeed Insights
- Confirmar que no hay degradación de performance

**Semanal:**
- Revisar npm audit para nuevas vulnerabilidades
- Actualizar dependencias si hay parches de seguridad
- Verificar Lighthouse scores periódicamente

---

## Variables de Entorno por Entorno

### Development (.env.local)
```bash
VITE_DEV_MODE=true
```

### Staging (Cloudflare Pages Environment Variables)
```bash
# No environment variables needed for static site
# Analytics IDs are baked into generated sites
```

### Production (Cloudflare Pages Environment Variables)
```bash
# No environment variables needed for static site
# This app is client-side only
```

**Nota:** Este proyecto es 100% client-side. No hay variables de entorno sensibles en runtime.
Las credenciales de Cloudflare (CF_API_TOKEN, CF_ACCOUNT_ID) solo se usan en GitHub Actions.

---

## Troubleshooting

### Error: "Build failed in GitHub Actions"
**Causa:** Dependencias rotas o cambios incompatibles
**Solución:**
```bash
# Localmente
rm -rf node_modules package-lock.json
npm install
npm run build
# Si funciona, commit package-lock.json
```

### Error: "Cloudflare deployment timed out"
**Causa:** API token inválido o problemas de red
**Solución:** Verificar CF_API_TOKEN en GitHub Secrets

### Error: "Security headers no aparecen"
**Causa:** _headers file no se copió a dist/
**Solución:**
```bash
# Verificar que public/_headers existe
ls -la public/_headers
# Rebuild
npm run build
# Verificar que se copió
ls -la dist/_headers
```

### Error: "404 Not Found en assets"
**Causa:** Rutas de assets incorrectas
**Solución:** Verificar configuración de `base` en vite.config.js

---

**Última actualización:** 2025-11-08
**Responsable:** Auditoría Pre-Manus
**Próxima revisión:** Después del primer deployment a producción
