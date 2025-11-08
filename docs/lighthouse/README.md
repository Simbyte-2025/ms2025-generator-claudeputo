# Lighthouse Performance Audits

Este directorio contiene los reportes de Lighthouse para verificar la calidad del build.

## Cómo Ejecutar Lighthouse Localmente

### Opción 1: Lighthouse CLI (Recomendado para CI/CD)

```bash
# Instalar Lighthouse globalmente
npm install -g lighthouse

# Iniciar servidor de preview
npm run preview &
PREVIEW_PID=$!

# Esperar a que el servidor inicie
sleep 3

# Ejecutar Lighthouse
lighthouse http://localhost:4173 \
  --output=json \
  --output=html \
  --output-path=./docs/lighthouse/report-$(date +%Y%m%d-%H%M%S) \
  --preset=desktop \
  --quiet \
  --chrome-flags="--headless"

# Detener el servidor
kill $PREVIEW_PID
```

### Opción 2: Chrome DevTools

1. Ejecutar `npm run build && npm run preview`
2. Abrir http://localhost:4173 en Chrome
3. Abrir DevTools (F12)
4. Ir a la pestaña "Lighthouse"
5. Configuración:
   - Mode: Navigation
   - Device: Desktop
   - Categories: Performance, Accessibility, Best Practices, SEO
6. Click "Analyze page load"
7. Exportar reporte como JSON
8. Guardar en `docs/lighthouse/`

### Opción 3: PageSpeed Insights (Producción)

Una vez desplegado en Cloudflare Pages:
1. Ir a https://pagespeed.web.dev/
2. Ingresar la URL de staging/producción
3. Analizar ambos: Mobile y Desktop
4. Descargar reportes JSON
5. Guardar en `docs/lighthouse/`

## Métricas Objetivo

Para garantizar buena experiencia de usuario:

### Core Web Vitals
- **LCP** (Largest Contentful Paint): ≤ 2.5s
- **FID** (First Input Delay): ≤ 100ms
- **CLS** (Cumulative Layout Shift): ≤ 0.1

### Lighthouse Scores (Desktop)
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

### Bundle Size
- **Total (uncompressed)**: ~282 KB
- **Total (gzip)**: ~88 KB
- **Initial JS**: < 150 KB (gzip)

## Interpretación de Resultados

### Performance (≥90 esperado)
- Evalúa velocidad de carga
- Principales métricas: LCP, TBT, CLS
- Optimizaciones: code splitting, lazy loading, image optimization

### Accessibility (≥95 esperado)
- Evalúa usabilidad para todos los usuarios
- Contraste de colores, etiquetas ARIA, navegación por teclado
- Crítico para cumplimiento legal

### Best Practices (≥95 esperado)
- Seguridad (HTTPS, headers, librerías actualizadas)
- Errores de consola
- Uso correcto de APIs modernas

### SEO (≥95 esperado)
- Meta tags, structured data
- Mobile-friendly, viewport
- Links crawleables, robots.txt

## Automatización en CI/CD

Para integrar en GitHub Actions (futuro):

```yaml
- name: Run Lighthouse CI
  run: |
    npm install -g @lhci/cli
    npm run build
    lhci autorun --config=lighthouserc.json
```

## Histórico de Audits

Los reportes deben nombrarse con formato:
- `report-YYYYMMDD-HHMMSS.json` - Reporte completo en JSON
- `report-YYYYMMDD-HHMMSS.html` - Reporte visual en HTML

Mantener al menos:
- Última auditoría antes de cada release
- Auditoría post-deployment de producción
- Auditorías tras cambios significativos de performance

---

**Nota:** Los reportes JSON deben versionarse en Git para tracking histórico.
**Los reportes HTML pueden ser opcionales (son grandes).**
