# Build Manifest - MS2025 Site Generator

## Versiones Exactas

### Runtime
- **Node.js**: `18.20.0` (enforced via `.nvmrc` y `package.json#engines`)
- **npm**: `>=9.0.0`

### Dependencias de Producción
- `react`: `^18.3.1`
- `react-dom`: `^18.3.1`
- `jszip`: `^3.10.1`
- `file-saver`: `^2.0.5`

### Dependencias de Desarrollo
- `vite`: `^5.4.11`
- `@vitejs/plugin-react`: `^4.3.4`
- `tailwindcss`: `^4.0.0`
- `@tailwindcss/postcss`: `^4.1.16`
- `autoprefixer`: `^10.4.20`
- `postcss`: `^8.4.49`
- `wrangler`: `^3.95.0`

## Comandos de Build

### Instalación Limpia
```bash
# Verificar versión de Node
node --version  # debe ser 18.20.x

# Instalación determinista
npm ci
```

### Build de Producción
```bash
npm run build
```

**Salida esperada:**
- Directorio: `dist/`
- Archivos:
  - `dist/index.html`
  - `dist/assets/index-*.css`
  - `dist/assets/index-*.js`
  - `dist/assets/utils-*.js`
  - `dist/assets/vendor-*.js`
- Tamaño total: ~282 KB (sin gzip)
- Tamaño con gzip: ~88 KB

### Verificación Local
```bash
npm run preview
# Abre http://localhost:4173
```

## Artefactos Generados

Los builds deterministas generan artefactos versionados en `docs/artifacts/`:

- `ms2025-dist-YYYY-MM-DD-HHMMSS.zip` - Build empaquetado
- `ms2025-dist-YYYY-MM-DD-HHMMSS.sha256` - Checksum SHA-256

## Build Determinístico

Para garantizar builds reproducibles:

1. ✅ Versión de Node fijada (`.nvmrc`)
2. ✅ `package-lock.json` versionado
3. ✅ `npm ci` en lugar de `npm install`
4. ✅ Sin dependencias de sistema operativo
5. ✅ Sin compilación nativa (binaries precompilados)

## Verificación de Integridad

```bash
# Verificar checksum del build
sha256sum -c docs/artifacts/ms2025-dist-*.sha256

# Verificar contenido del ZIP
unzip -t docs/artifacts/ms2025-dist-*.zip
```

---

**Última actualización:** 2025-11-08
**Responsable:** Auditoría Pre-Manus
