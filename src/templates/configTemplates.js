export const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="es-CL">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[NOMBRE_NEGOCIO] - [SLOGAN]</title>
  
  <meta name="description" content="[DESCRIPCION_SEO]">
  <meta name="keywords" content="[KEYWORDS]">
  
  <meta property="og:type" content="website">
  <meta property="og:title" content="[NOMBRE_NEGOCIO]">
  <meta property="og:description" content="[DESCRIPCION_SEO]">
  <meta property="og:url" content="[SITE_URL]">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "[NOMBRE_NEGOCIO]",
    "description": "[DESCRIPCION_CORTA]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[DIRECCION]",
      "addressLocality": "[CIUDAD]",
      "addressRegion": "[REGION]",
      "addressCountry": "CL"
    },
    "telephone": "[TELEFONO]",
    "email": "[EMAIL]"
  }
  </script>
  
  <link rel="stylesheet" href="./styles/main.css">
  ${`[GA4_MEASUREMENT_ID]` ? `<script async src="https://www.googletagmanager.com/gtag/js?id=[GA4_MEASUREMENT_ID]"></script>` : ''}
</head>
<body class="font-sans antialiased">
  
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold" style="color: [COLOR_PRIMARIO]">[NOMBRE_NEGOCIO]</div>
      
      <div class="hidden md:flex space-x-6">
        <a href="#inicio" class="hover:text-blue-600 transition">Inicio</a>
        <a href="#servicios" class="hover:text-blue-600 transition">Servicios</a>
        <a href="#contacto" class="hover:text-blue-600 transition">Contacto</a>
      </div>
      
      <a href="https://wa.me/56[WHATSAPP_NUMBER]?text=[WHATSAPP_MESSAGE]" target="_blank" rel="noopener" data-wa-cta="header" class="hidden md:inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
        💬 WhatsApp
      </a>
      
      <button id="mobile-menu-btn" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>
    
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
      <a href="#inicio" class="block px-4 py-2 hover:bg-gray-100">Inicio</a>
      <a href="#servicios" class="block px-4 py-2 hover:bg-gray-100">Servicios</a>
      <a href="#contacto" class="block px-4 py-2 hover:bg-gray-100">Contacto</a>
      <a href="https://wa.me/56[WHATSAPP_NUMBER]" target="_blank" data-wa-cta="mobile-menu" class="block px-4 py-2 bg-green-500 text-white text-center">💬 WhatsApp</a>
    </div>
  </header>
  
  <section id="inicio" class="relative h-screen flex items-center justify-center bg-cover bg-center" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('[HERO_IMAGE]')">
    <div class="text-center text-white px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">[NOMBRE_NEGOCIO]</h1>
      <p class="text-xl md:text-2xl mb-8">[SLOGAN]</p>
      <a href="https://wa.me/56[WHATSAPP_NUMBER]?text=[WHATSAPP_MESSAGE]" target="_blank" rel="noopener" data-wa-cta="hero" class="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg hover:bg-green-600 transition transform hover:scale-105">
        💬 Contáctanos por WhatsApp
      </a>
    </div>
  </section>
  
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12" style="color: [COLOR_PRIMARIO]">Sobre Nosotros</h2>
      <div class="max-w-3xl mx-auto">
        <p class="text-lg text-gray-700 mb-6">[DESCRIPCION_CORTA]</p>
        <p class="text-gray-600">[DESCRIPCION_LARGA]</p>
      </div>
    </div>
  </section>
  
  <section id="servicios" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12" style="color: [COLOR_PRIMARIO]">Nuestros Servicios</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        [SERVICIOS_HTML]
      </div>
    </div>
  </section>
  
  <section id="contacto" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12" style="color: [COLOR_PRIMARIO]">Contáctanos</h2>
      
      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 class="text-2xl font-bold mb-6">Información de Contacto</h3>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <span class="text-2xl mr-3">📍</span>
              <div>
                <p class="font-semibold">Dirección</p>
                <p class="text-gray-600">[DIRECCION]</p>
                <p class="text-gray-600">[CIUDAD], [REGION]</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-2xl mr-3">📧</span>
              <div>
                <p class="font-semibold">Email</p>
                <a href="mailto:[EMAIL]" class="text-blue-600 hover:underline">[EMAIL]</a>
              </div>
            </div>
            
            <div class="flex items-start">
              <span class="text-2xl mr-3">💬</span>
              <div>
                <p class="font-semibold">WhatsApp</p>
                <a href="https://wa.me/56[WHATSAPP_NUMBER]" target="_blank" data-wa-cta="contact-section" class="text-green-600 hover:underline">+56 [WHATSAPP_NUMBER]</a>
              </div>
            </div>
            
            <div class="mt-8">
              <h4 class="font-semibold text-lg mb-4">Horarios de Atención</h4>
              <div class="space-y-2">
                [HORARIOS_HTML]
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-8 text-white flex flex-col justify-center items-center text-center">
          <div class="text-6xl mb-4">💬</div>
          <h3 class="text-2xl font-bold mb-4">¡Escríbenos por WhatsApp!</h3>
          <p class="mb-6">Respuesta rápida y atención personalizada</p>
          <a href="https://wa.me/56[WHATSAPP_NUMBER]?text=[WHATSAPP_MESSAGE]" target="_blank" rel="noopener" data-wa-cta="contact-card" class="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105">
            Iniciar Conversación
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4 text-center">
      <h3 class="text-2xl font-bold mb-4">[NOMBRE_NEGOCIO]</h3>
      <p class="text-gray-400 mb-6">[SLOGAN]</p>
      <p class="text-gray-500 text-sm">© [ANIO_ACTUAL] [NOMBRE_NEGOCIO]. Todos los derechos reservados.</p>
    </div>
  </footer>
  
  <script src="./js/menu.js"></script>
  <script src="./js/whatsapp.js"></script>
  ${`[GA4_MEASUREMENT_ID]` ? `<script src="./js/analytics.js"></script>` : ''}
</body>
</html>`;

export const PACKAGE_JSON_TEMPLATE = `{
  "name": "[NOMBRE_NEGOCIO_SLUG]",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && wrangler pages deploy dist"
  },
  "devDependencies": {
    "vite": "^5.4.11",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.49",
    "autoprefixer": "^10.4.20",
    "wrangler": "^3.95.0"
  }
}`;

export const README_TEMPLATE = `# [NOMBRE_NEGOCIO]

Micro-sitio web generado con MS 2025 Site Generator.

## 🚀 Inicio Rápido

\`\`\`bash
npm install
npm run dev
\`\`\`

## 📦 Build

\`\`\`bash
npm run build
\`\`\`

## ☁️ Deploy a Cloudflare Pages

\`\`\`bash
npm run deploy
\`\`\`

## 📝 Información del Negocio

- **Negocio**: [NOMBRE_NEGOCIO]
- **Ubicación**: [CIUDAD], [REGION]
- **Contacto**: [EMAIL]
- **WhatsApp**: +56 [WHATSAPP_NUMBER]

---

Generado con ❤️ por MS 2025 Site Generator
`;
