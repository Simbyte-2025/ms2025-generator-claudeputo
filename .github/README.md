# GitHub Actions Configuration

Este directorio contiene los workflows de CI/CD para el proyecto MS2025 Site Generator.

## Workflows

### `deploy.yml` - Deploy to Cloudflare Pages

Workflow principal que ejecuta:
1. **Lint** - Verifica calidad de código con ESLint
2. **Build** - Construye la aplicación y sube artefacto
3. **Deploy to Staging** - Despliega a Cloudflare Pages (solo en push)
4. **Security Scan** - Escaneo de vulnerabilidades y secretos

## Configuración de Secrets

Para que el workflow funcione, debes configurar los siguientes **GitHub Secrets**:

### Secrets Requeridos

1. **CF_API_TOKEN**
   - Token de API de Cloudflare con permisos para Pages
   - Obtener en: Cloudflare Dashboard → My Profile → API Tokens
   - Permisos necesarios: `Cloudflare Pages:Edit`

2. **CF_ACCOUNT_ID**
   - ID de tu cuenta de Cloudflare
   - Obtener en: Cloudflare Dashboard → URL (después de seleccionar tu cuenta)
   - Formato: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

3. **CF_PROJECT_NAME** (opcional)
   - Nombre del proyecto en Cloudflare Pages
   - Por defecto: `ms2025-generator`
   - Solo necesario si usas un nombre diferente

### Cómo Configurar Secrets

1. Ve a tu repositorio en GitHub
2. Navega a: `Settings` → `Secrets and variables` → `Actions`
3. Click en `New repository secret`
4. Añade cada secret con su nombre y valor correspondiente

## Environments

El workflow usa GitHub Environments para deployment:

- **staging** - Environment para deployments de desarrollo/staging
  - Se despliega automáticamente en push a `main`, `develop`, o ramas `claude/**`
  - URL dinámica basada en la rama

Para configurar environments:
1. Ve a `Settings` → `Environments`
2. Crea environment `staging`
3. (Opcional) Añade protection rules o reviewers

## Verificación

Una vez configurado, el workflow se ejecutará automáticamente en:
- Push a branches: `main`, `develop`, `claude/**`
- Pull Requests a `main`

Puedes verificar el estado en la pestaña `Actions` del repositorio.

## Troubleshooting

### Error: "CF_API_TOKEN not found"
→ Verifica que el secret esté configurado correctamente en GitHub Secrets

### Error: "Build failed"
→ Verifica que `npm ci && npm run build` funcione localmente

### Error: "Cloudflare API error"
→ Verifica que el API token tenga los permisos correctos

### Deployment URL no aparece
→ Verifica que el workflow tenga permisos para comentar en PRs (GITHUB_TOKEN)

## Notas de Seguridad

- **NUNCA** commits secrets directamente en el código
- Usa GitHub Secrets para todas las credenciales
- Los secrets no se exponen en logs de GitHub Actions
- Revisa regularmente los permisos de API tokens
