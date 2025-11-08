import { replaceVariables, generateServicesHTML, generateScheduleHTML, generateGalleryHTML } from './templateEngine.js';
import { HTML_TEMPLATE, PACKAGE_JSON_TEMPLATE, README_TEMPLATE } from '../templates/configTemplates.js';

export async function generateSiteFiles(formData) {
  const slug = formData.businessName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const variables = {
    NOMBRE_NEGOCIO: formData.businessName,
    NOMBRE_NEGOCIO_SLUG: slug,
    SLOGAN: formData.slogan,
    DESCRIPCION_CORTA: formData.shortDescription,
    DESCRIPCION_LARGA: formData.longDescription,
    DESCRIPCION_SEO: formData.shortDescription.substring(0, 160),
    KEYWORDS: `${formData.businessName}, ${formData.industry}, ${formData.city}`,
    WHATSAPP_NUMBER: formData.whatsapp,
    WHATSAPP_MESSAGE: encodeURIComponent(formData.whatsappMessage),
    TELEFONO: formData.phone,
    EMAIL: formData.email,
    DIRECCION: formData.address,
    CIUDAD: formData.city,
    REGION: formData.region,
    COLOR_PRIMARIO: formData.primaryColor,
    COLOR_SECUNDARIO: formData.secondaryColor,
    COLOR_ACENTO: formData.accentColor,
    GA4_MEASUREMENT_ID: formData.ga4Id || '',
    CLARITY_PROJECT_ID: formData.clarityId || '',
    SERVICIOS_HTML: generateServicesHTML(formData.services),
    HORARIOS_HTML: generateScheduleHTML(formData.schedule),
    GALLERY_IMAGES_HTML: formData.includeGallery ? generateGalleryHTML(formData.galleryImages) : '',
    ANIO_ACTUAL: new Date().getFullYear(),
    SITE_URL: `https://${slug}.cl`,
    HERO_IMAGE: formData.heroImage || 'https://placehold.co/1920x1080/1e40af/ffffff?text=Hero+Image',
    INSTAGRAM: formData.instagram,
    FACEBOOK: formData.facebook
  };

  const files = {};
  
  files['package.json'] = replaceVariables(PACKAGE_JSON_TEMPLATE, variables);
  files['README.md'] = replaceVariables(README_TEMPLATE, variables);
  files['src/index.html'] = replaceVariables(HTML_TEMPLATE, variables);
  
  files['vite.config.js'] = `import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});`;

  files['tailwind.config.js'] = `export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '${formData.primaryColor}',
        secondary: '${formData.secondaryColor}',
        accent: '${formData.accentColor}'
      }
    }
  }
};`;

  files['postcss.config.js'] = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};`;

  files['src/styles/main.css'] = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: ${formData.primaryColor};
  --color-secondary: ${formData.secondaryColor};
  --color-accent: ${formData.accentColor};
}`;

  files['src/js/menu.js'] = `document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});`;

  files['src/js/whatsapp.js'] = `document.querySelectorAll('[data-wa-cta]').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const location = this.dataset.waCta;
    console.log('WhatsApp CTA clicked:', location);
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        'location': location
      });
    }
  });
});`;

  if (formData.ga4Id) {
    files['src/js/analytics.js'] = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${formData.ga4Id}');`;
  }

  files['.gitignore'] = `node_modules/
dist/
.env
*.log`;

  files['wrangler.toml'] = `name = "${slug}"
compatibility_date = "2024-11-01"

[build]
command = "npm run build"

[[pages_build_output_dir]]
directory = "dist"`;
  
  return files;
}
