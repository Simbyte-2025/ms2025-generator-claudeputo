# 📦 Guía de Deployment - MS 2025 Site Generator

## 🎯 Opciones de Deployment

### Opción 1: Cloudflare Pages (Recomendado)

#### Prerequisitos
- Cuenta en [Cloudflare](https://cloudflare.com)
- Wrangler CLI instalado

#### Paso 1: Instalar Dependencias
```bash
cd ms2025-site-generator
npm install
```

#### Paso 2: Build del Proyecto
```bash
npm run build
```

#### Paso 3: Deploy con Wrangler
```bash
# Login a Cloudflare
npx wrangler login

# Deploy
npx wrangler pages deploy dist --project-name=ms2025-generator
```

La URL pública será: `https://ms2025-generator.pages.dev`

#### Deployment Continuo
```bash
# Conectar a GitHub
git remote add origin https://github.com/tu-usuario/ms2025-generator.git
git push -u origin master
```

En Cloudflare Pages:
1. Ir a Workers & Pages > Create Application
2. Conectar repositorio GitHub
3. Configurar:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy automático en cada push

### Opción 2: Vercel

```bash
npm install -g vercel
vercel --prod
```

### Opción 3: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🔧 Variables de Entorno

No requiere variables de entorno para funcionar.

## ✅ Verificación Post-Deployment

1. Abrir URL pública
2. Verificar que el formulario carga
3. Completar wizard de 5 pasos
4. Generar sitio de prueba
5. Descargar ZIP
6. Verificar contenido del ZIP

## 🐛 Troubleshooting

**Error: "Cannot find module"**
- Ejecutar: `npm install`

**Error: "Build failed"**
- Verificar Node.js ≥18
- Limpiar: `rm -rf node_modules package-lock.json && npm install`

**Preview no funciona**
- Verificar CORS habilitado
- Probar en navegador diferente

## 📊 Métricas Post-Deployment

Monitorear:
- Lighthouse Score ≥85
- Time to Interactive <3s
- First Contentful Paint <1.5s
