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

2. **OPCIÓN SIMPLE: Ejecutar wrapper script** (~1K-2K tokens)
   ```bash
   # Un solo comando - ejecuta todo el flujo determinista
   ./scripts/manus-deploy.sh
   ```

   El script ejecuta automáticamente:
   - ✅ npm run verify (versiones de Node/npm)
   - ✅ npm run lint (calidad de código)
   - ✅ npm run build (construir aplicación)
   - ✅ Verificar artefactos (dist/index.html, dist/_headers, dist/assets/)
   - ✅ Deploy (manual via wrangler o automático via CI)

3. **OPCIÓN ALTERNATIVA: Comandos individuales** (~2K-3K tokens)
   ```bash
   # Solo si el script wrapper falla o necesitas control granular
   npm run verify
   npm run lint
   npm run build
   npm run deploy  # o git push origin main para CI/CD
   ```

4. **Validaciones post-deploy** (~1K tokens)
   ```bash
   # Verificar URL accesible
   curl -I https://ms2025-generator.pages.dev

   # Verificar security headers
   curl -I https://ms2025-generator.pages.dev | grep -i content-security

   # Verificar SEO files
   curl -I https://ms2025-generator.pages.dev/robots.txt
   curl -I https://ms2025-generator.pages.dev/sitemap.xml

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

## Optimizaciones Implementadas

### ✅ Optimizaciones ya aplicadas:

1. **✅ Wrapper Script para Manus** (IMPLEMENTADO)
   Script: `scripts/manus-deploy.sh`

   Características:
   - 5 pasos deterministas con logging visual (colores)
   - Manejo robusto de errores (set -e, set -u, set -o pipefail)
   - Detección automática de CI vs local
   - Validación de artefactos de build
   - Exit codes apropiados para automatización

   Uso:
   ```bash
   ./scripts/manus-deploy.sh
   ```

   Output esperado:
   ```
   ℹ Step 1/5: Verifying environment...
   ✓ Environment verified
   ℹ Step 2/5: Linting code...
   ✓ Linting passed
   ℹ Step 3/5: Building application...
   ✓ Build completed
   ℹ Step 4/5: Verifying build artifacts...
   ✓ Build artifacts verified
   ℹ Step 5/5: Deploying...
   ✓ Deployment completed
   ```

### 🔄 Optimizaciones futuras (opcional):

2. **Template de Respuestas** (PENDIENTE)
   Crear `docs/MANUS_RESPONSES.md` con templates pre-escritos:
   - "Deployment exitoso"
   - "Deployment falló: [error]"
   - "Rollback ejecutado"
   Manus solo llena los blancos.

3. **Integración con Rube/Composio** (PENDIENTE - NO IMPLEMENTAR EN ESTE REPO)
   Si se integra herramienta de orquestación externa (fuera de este repo):
   ```javascript
   execute_rube_tool("deploy_cloudflare", {
     project: "ms2025-generator",
     branch: "main"
   })
   ```
   Reduce tokens a ~100-200 (solo llamada HTTP).

   **NOTA:** Esta integración debe hacerse vía proxy HTTP externo,
   NO añadir SDKs de terceros a este repositorio.

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
