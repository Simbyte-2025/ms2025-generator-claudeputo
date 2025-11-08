# 🚀 MS 2025 Site Generator

**Constructor Inteligente de Micro-Sitios Comunitarios**

Aplicación web que genera sitios web profesionales para microemprendedores chilenos mediante un formulario guiado de 5 pasos.

## ✨ Características

- **Wizard de 5 pasos**: Guía intuitiva para capturar toda la información del negocio
- **Preview en tiempo real**: Visualiza el sitio mientras lo configuras
- **Exportación ZIP**: Descarga el código fuente completo
- **Deploy a Cloudflare Pages**: Integración directa con Cloudflare
- **Sitios optimizados**: HTML5 + Tailwind CSS v4 + JavaScript vanilla
- **SEO ready**: Meta tags, Schema.org, Open Graph
- **WhatsApp CTAs**: Botones de contacto con tracking
- **Mobile-first**: Totalmente responsivo

## 🛠️ Stack Tecnológico

### Aplicación Generadora
- React 18 + Vite 5
- Tailwind CSS v4
- JSZip + FileSaver
- Cloudflare Pages

### Sitios Generados
- HTML5 semántico
- Tailwind CSS v4
- JavaScript vanilla
- Analytics integrado (GA4, Clarity)

## 🚀 Inicio Rápido

### Instalación

\`\`\`bash
git clone <repo-url>
cd ms2025-site-generator
npm install
\`\`\`

### Desarrollo

\`\`\`bash
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000)

### Build

\`\`\`bash
npm run build
\`\`\`

### Deploy

\`\`\`bash
npm run deploy
\`\`\`

## 📂 Estructura del Proyecto

\`\`\`
ms2025-site-generator/
├── src/
│   ├── main.jsx                 # Entry point
│   ├── App.jsx                  # Componente raíz
│   ├── index.css                # Estilos globales
│   ├── components/
│   │   ├── FormWizard.jsx       # Container wizard
│   │   ├── ProgressIndicator.jsx
│   │   ├── Step*.jsx            # Pasos del formulario
│   │   ├── PreviewPanel.jsx     # Preview iframe
│   │   └── ExportPanel.jsx      # Export & download
│   ├── utils/
│   │   ├── templateEngine.js    # Motor de variables
│   │   └── codeGenerator.js     # Generador archivos
│   └── templates/
│       └── configTemplates.js   # Templates HTML/config
├── package.json
├── vite.config.js
├── tailwind.config.js
└── wrangler.toml
\`\`\`

## 🎯 Uso

### 1. Completa el Wizard

**Paso 1: Datos Básicos**
- Nombre del negocio
- Rubro/industria
- Slogan
- Descripciones (corta y larga)
- Ubicación

**Paso 2: Branding**
- Colores (primario, secundario, acento)
- Imagen hero (opcional)

**Paso 3: Servicios**
- Hasta 6 servicios/productos
- Nombre, descripción, precio, icono

**Paso 4: Contacto**
- WhatsApp (requerido)
- Teléfono, email, dirección
- Horarios de atención
- Redes sociales (opcional)

**Paso 5: Características**
- Galería de imágenes
- Formulario de contacto
- Mapa de ubicación
- Analytics (GA4, Clarity)

### 2. Genera el Sitio

Click en "🚀 Generar Sitio Completo"

### 3. Descarga el ZIP

Click en "📦 Descargar ZIP"

### 4. Deploy

Descomprime el ZIP y ejecuta:

\`\`\`bash
cd nombre-del-sitio
npm install
npm run build
npm run deploy
\`\`\`

## 📊 KPIs de Calidad

- **Time-to-generate**: <30s por sitio
- **Bundle size**: <500KB
- **Sitios generados**:
  - LCP ≤2.5s
  - CLS ≤0.1
  - Lighthouse Score ≥85

## 🧩 Integración con Cloudflare

El proyecto incluye `wrangler.toml` preconfigurado para deployment directo a Cloudflare Pages via MCP connector.

### Deployment Manual

\`\`\`bash
# En el directorio del sitio generado
wrangler pages deploy dist
\`\`\`

### Deployment Automático

El botón "Deploy to Cloudflare" usa el MCP connector para:
1. Crear repositorio GitHub
2. Pushear código
3. Conectar a Cloudflare Pages
4. Deploy automático

## 🎨 Personalización

### Colores del Tema

Edita en `src/index.css`:

\`\`\`css
:root {
  --color-primary: #1E40AF;
  --color-secondary: #10B981;
  --color-accent: #F59E0B;
}
\`\`\`

### Templates del Sitio

Edita en `src/templates/configTemplates.js` el `HTML_TEMPLATE`

## 🐛 Troubleshooting

### Error al generar ZIP

Verifica que todos los campos requeridos estén completos.

### Preview no funciona

Actualiza el navegador. El preview usa iframes que pueden requerir CORS habilitado.

### Deploy falla

Verifica credenciales de Cloudflare en `wrangler.toml`

## 📝 Registro de Cierre (Notion)

\`\`\`yaml
RegistroNotion:
  Tool: Claude
  Tipo: Desarrollo Completo
  Título: MS 2025 Site Generator - Aplicación Generadora + Templates
  Sprint: S25W45
  Leads Asociados: []
  URL: /home/claude/ms2025-site-generator
  Estado: Funcional - Requiere Testing
\`\`\`

## 🔄 Próximos Pasos

1. **Testing**: Probar generación con diferentes rubros
2. **MCP Integration**: Implementar deployment automático vía Cloudflare MCP
3. **Templates**: Agregar más variaciones de diseño
4. **Features**: Galería funcional, formularios, mapas

## 📄 Licencia

© 2025 MS 2025 - Micro-Sitios Quilicura

---

**Construido con ❤️ para emprendedores chilenos**
