# Token Budget Strategy - Pre-Manus vs Manus

## Objetivo

Minimizar el consumo de tokens de Manus durante operaciones, delegando trabajo pesado a la fase Pre-Manus y automatización.

---

## División de Responsabilidades

### Pre-Manus (Esta Auditoría) - ✅ COMPLETADO

**Objetivo:** Dejar el repositorio 100% listo para deployment determinista.

**Consumo de tokens:** ~60K-80K (una sola vez, trabajo de auditoría)

**Tareas realizadas:**
1. ✅ **Reproducibilidad**
   - Configurar Node 18.20.x (engines, .nvmrc)
   - Verificar npm ci && npm run build funciona
   - Documentar versiones exactas en BUILD_MANIFEST.md

2. ✅ **Calidad de código**
   - Configurar ESLint v9 con reglas estrictas
   - Eliminar todos los warnings de linting
   - Garantizar que `npm run lint` pase con --max-warnings 0

3. ✅ **Seguridad**
   - Crear .env.example
   - Configurar security headers en public/_headers
   - Escanear y confirmar ausencia de secretos

4. ✅ **CI/CD**
   - Configurar GitHub Actions workflow
   - Automatizar lint → build → deploy
   - Documentar configuración de secrets

5. ✅ **Documentación**
   - BUILD_MANIFEST.md (versiones, comandos, artefactos)
   - DEPLOY_PLAN.md (flujo completo de deployment)
   - AUDIT_REPORT.md (hallazgos y correcciones)
   - Lighthouse setup instructions

6. ✅ **Artefactos**
   - Generar ZIP de dist/
   - Generar checksums SHA-256
   - Guardar evidencias en docs/artifacts/

**Salida:**
- Repositorio determinista
- Build reproducible
- Pipeline CI/CD funcional
- Documentación completa

---

### Manus (Fase de Ejecución) - 🎯 OBJETIVO: <5K tokens

**Objetivo:** Solo ejecutar acciones deterministas y orquestación.

**Consumo esperado:** ~2K-5K tokens (por deployment)

**Tareas de Manus:**
1. **Leer documentación existente** (~500 tokens)
   - docs/DEPLOY_PLAN.md
   - docs/BUILD_MANIFEST.md
   - .github/README.md

2. **Verificar estado del repo** (~500 tokens)
   ```bash
   git status
   npm run verify  # Ya configurado en package.json
   npm run lint    # Debe pasar sin intervención
   ```

3. **Ejecutar deployment** (~1K tokens)
   ```bash
   # Opción A: Vía GitHub Actions (recomendado)
   git push origin main
   # Monitorear workflow en GitHub Actions UI

   # Opción B: Manual (solo si GitHub Actions falla)
   npm ci
   npm run build
   npm run deploy  # wrangler pages deploy dist
   ```

4. **Validaciones post-deploy** (~1K tokens)
   ```bash
   # Verificar URL accesible
   curl -I https://ms2025-generator.pages.dev

   # Verificar security headers
   curl -I https://ms2025-generator.pages.dev | grep -i content-security

   # Lighthouse (opcional, si hay tiempo)
   lighthouse <staging-url> --preset=desktop --quiet
   ```

5. **Reportar resultado** (~500 tokens)
   - Confirmar deployment exitoso
   - Listar URL de deployment
   - Reportar cualquier anomalía (si la hay)

**Lo que Manus NO debe hacer:**
- ❌ Investigar problemas de código
- ❌ Generar código nuevo
- ❌ Arreglar bugs descubiertos en deployment
- ❌ Modificar configuración de linting/build
- ❌ Descubrir dependencias faltantes
- ❌ Debuggear errores de compilación

**Si algo falla:**
- Reportar el error específico
- Sugerir rollback a versión anterior
- Delegar investigación a humano o nueva sesión de auditoría

---

## Estrategia de Minimización de Tokens

### 1. Documentación como "Source of Truth"
- Todos los comandos documentados en `docs/`
- Manus solo lee y ejecuta, no investiga
- Elimina necesidad de "descubrimiento"

### 2. Comandos Deterministas
- `npm ci` en lugar de `npm install`
- `npm run build` con configuración fija
- `wrangler pages deploy dist` con flags predefinidos

### 3. Validaciones Automáticas
- GitHub Actions ejecuta lint/build/test
- Manus solo necesita verificar que workflow pasó
- Reduce necesidad de validaciones manuales

### 4. Scripts npm Pre-configurados
```json
{
  "verify": "node --version && npm --version",
  "lint": "eslint . --max-warnings 0",
  "build": "vite build",
  "deploy": "npm run build && wrangler pages deploy dist"
}
```
Manus puede ejecutar `npm run <script>` sin necesidad de conocer detalles internos.

### 5. Evidencias Pre-generadas
- ZIP del build en `docs/artifacts/`
- Checksums para verificación de integridad
- Lighthouse reports como referencia

---

## Comparación de Consumo

| Fase | Actividad | Tokens | Frecuencia |
|------|-----------|--------|------------|
| **Pre-Manus** | Auditoría completa | 60K-80K | Una vez (setup inicial) |
| **Pre-Manus** | Setup CI/CD | 10K-15K | Una vez |
| **Pre-Manus** | Documentación | 15K-20K | Una vez |
| **Manus** | Deployment a staging | 2K-3K | Por deployment |
| **Manus** | Deployment a prod | 3K-5K | Por deployment |
| **Manus** | Rollback (si necesario) | 1K-2K | Raro |

**Total Setup:** ~85K-115K tokens (una vez)
**Total por Deployment:** 2K-5K tokens (repetible)

**ROI:** Después de ~30 deployments, el overhead de Pre-Manus se amortiza.

---

## Optimizaciones Adicionales

### Para reducir tokens de Manus aún más:

1. **Wrapper Script para Manus**
   Crear `scripts/manus-deploy.sh`:
   ```bash
   #!/bin/bash
   set -e
   echo "🔍 Verificando estado..."
   npm run verify
   npm run lint
   echo "🏗️  Building..."
   npm run build
   echo "🚀 Deploying..."
   npm run deploy
   echo "✅ Done!"
   ```
   Manus solo ejecuta: `./scripts/manus-deploy.sh`

2. **Template de Respuestas**
   Crear `docs/MANUS_RESPONSES.md` con templates pre-escritos:
   - "Deployment exitoso"
   - "Deployment falló: [error]"
   - "Rollback ejecutado"
   Manus solo llena los blancos.

3. **Integración con Rube/Composio (Futura)**
   Si se integra herramienta de orquestación externa:
   ```javascript
   execute_rube_tool("deploy_cloudflare", {
     project: "ms2025-generator",
     branch: "main"
   })
   ```
   Reduce tokens a ~100-200 (solo llamada HTTP).

---

## Métricas de Éxito

### Pre-Manus
- ✅ Repositorio pasa CI/CD sin intervención manual
- ✅ Documentación completa y actualizada
- ✅ Build determinista y reproducible

### Manus
- 🎯 Deployment completo en <5K tokens
- 🎯 Zero intervención humana en flujo happy path
- 🎯 Tiempo de deployment: <5 minutos
- 🎯 Tasa de éxito: >95% en deployments

---

**Resumen:** Pre-Manus hace el trabajo pesado una vez. Manus solo ejecuta recetas deterministas, minimizando tokens y maximizando confiabilidad.

---

**Última actualización:** 2025-11-08
**Responsable:** Auditoría Pre-Manus
