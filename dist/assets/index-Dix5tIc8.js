import{r as u,a as R,R as M}from"./vendor-DJ1oPbzn.js";import{J as _,F as P}from"./utils-Bs22L4Vu.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();var E={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=u,T=Symbol.for("react.element"),G=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,B=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function C(s,l,t){var a,i={},n=null,r=null;t!==void 0&&(n=""+t),l.key!==void 0&&(n=""+l.key),l.ref!==void 0&&(r=l.ref);for(a in l)k.call(l,a)&&!$.hasOwnProperty(a)&&(i[a]=l[a]);if(s&&s.defaultProps)for(a in l=s.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:T,type:s,key:n,ref:r,props:i,_owner:B.current}}x.Fragment=G;x.jsx=C;x.jsxs=C;E.exports=x;var e=E.exports,v={},N=R;v.createRoot=N.createRoot,v.hydrateRoot=N.hydrateRoot;function H({currentStep:s}){const l=[{number:1,label:"Datos Básicos"},{number:2,label:"Branding"},{number:3,label:"Servicios"},{number:4,label:"Contacto"},{number:5,label:"Características"}];return e.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 mb-6",children:e.jsx("div",{className:"flex items-center justify-between",children:l.map((t,a)=>e.jsxs("div",{className:"flex items-center flex-1",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`step-indicator ${s===t.number?"step-active":s>t.number?"step-completed":"step-inactive"}`,children:s>t.number?"✓":t.number}),e.jsx("span",{className:`text-xs mt-2 font-medium ${s===t.number?"text-blue-600":"text-gray-500"}`,children:t.label})]}),a<l.length-1&&e.jsx("div",{className:`flex-1 h-1 mx-2 rounded ${s>t.number?"bg-green-500":"bg-gray-200"}`})]},t.number))})})}function U({formData:s,errors:l,onChange:t}){return e.jsxs("div",{className:"card space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Paso 1: Datos Básicos del Negocio"}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Nombre del Negocio *"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"Ej: Pastelería Dulce Hogar",value:s.businessName,onChange:a=>t("businessName",a.target.value)}),l.businessName&&e.jsx("p",{className:"form-error",children:l.businessName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Rubro/Industria *"}),e.jsxs("select",{className:"form-input",value:s.industry,onChange:a=>t("industry",a.target.value),children:[e.jsx("option",{value:"",children:"Selecciona un rubro"}),e.jsx("option",{value:"Gastronomía",children:"Gastronomía"}),e.jsx("option",{value:"Retail",children:"Retail"}),e.jsx("option",{value:"Servicios",children:"Servicios"}),e.jsx("option",{value:"Artesanías",children:"Artesanías"}),e.jsx("option",{value:"Belleza",children:"Belleza"}),e.jsx("option",{value:"Salud",children:"Salud"}),e.jsx("option",{value:"Educación",children:"Educación"}),e.jsx("option",{value:"Tecnología",children:"Tecnología"}),e.jsx("option",{value:"Otro",children:"Otro"})]}),l.industry&&e.jsx("p",{className:"form-error",children:l.industry})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Slogan *"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"Ej: Los mejores pasteles artesanales de Quilicura",maxLength:100,value:s.slogan,onChange:a=>t("slogan",a.target.value)}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[s.slogan.length,"/100 caracteres"]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Descripción Corta (50-100 palabras) *"}),e.jsx("textarea",{className:"form-input",rows:4,placeholder:"Descripción breve de tu negocio...",value:s.shortDescription,onChange:a=>t("shortDescription",a.target.value)}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[s.shortDescription.split(" ").filter(a=>a).length," palabras"]}),l.shortDescription&&e.jsx("p",{className:"form-error",children:l.shortDescription})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Descripción Larga (200-300 palabras) *"}),e.jsx("textarea",{className:"form-input",rows:8,placeholder:"Descripción extendida de tu negocio, historia, valores...",value:s.longDescription,onChange:a=>t("longDescription",a.target.value)}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[s.longDescription.split(" ").filter(a=>a).length," palabras"]}),l.longDescription&&e.jsx("p",{className:"form-error",children:l.longDescription})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Ciudad *"}),e.jsxs("select",{className:"form-input",value:s.city,onChange:a=>t("city",a.target.value),children:[e.jsx("option",{value:"Quilicura",children:"Quilicura"}),e.jsx("option",{value:"Santiago",children:"Santiago"}),e.jsx("option",{value:"Valparaíso",children:"Valparaíso"}),e.jsx("option",{value:"Concepción",children:"Concepción"}),e.jsx("option",{value:"La Serena",children:"La Serena"}),e.jsx("option",{value:"Temuco",children:"Temuco"}),e.jsx("option",{value:"Puerto Montt",children:"Puerto Montt"}),e.jsx("option",{value:"Punta Arenas",children:"Punta Arenas"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Región *"}),e.jsxs("select",{className:"form-input",value:s.region,onChange:a=>t("region",a.target.value),children:[e.jsx("option",{value:"Metropolitana",children:"Metropolitana"}),e.jsx("option",{value:"Valparaíso",children:"Valparaíso"}),e.jsx("option",{value:"Biobío",children:"Biobío"}),e.jsx("option",{value:"Coquimbo",children:"Coquimbo"}),e.jsx("option",{value:"Araucanía",children:"Araucanía"}),e.jsx("option",{value:"Los Lagos",children:"Los Lagos"}),e.jsx("option",{value:"Magallanes",children:"Magallanes"})]})]})]})]})}function W({formData:s,errors:l,onChange:t}){return e.jsxs("div",{className:"card space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Paso 2: Branding e Identidad Visual"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Color Primario"}),e.jsx("input",{type:"color",className:"form-input h-12",value:s.primaryColor,onChange:a=>t("primaryColor",a.target.value)}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:s.primaryColor})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Color Secundario"}),e.jsx("input",{type:"color",className:"form-input h-12",value:s.secondaryColor,onChange:a=>t("secondaryColor",a.target.value)}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:s.secondaryColor})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Color de Acento"}),e.jsx("input",{type:"color",className:"form-input h-12",value:s.accentColor,onChange:a=>t("accentColor",a.target.value)}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:s.accentColor})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"URL Imagen Hero (Opcional)"}),e.jsx("input",{type:"url",className:"form-input",placeholder:"https://ejemplo.com/imagen-hero.jpg",value:s.heroImage||"",onChange:a=>t("heroImage",a.target.value)}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Recomendado: 1920x1080px, formato JPG/WebP"})]})]})}function F({formData:s,errors:l,onChange:t}){const a=()=>{t("services",[...s.services,{name:"",description:"",price:"",icon:"⭐"}])},i=(r,c,o)=>{const m=[...s.services];m[r][c]=o,t("services",m)},n=r=>{const c=s.services.filter((o,m)=>m!==r);t("services",c)};return e.jsxs("div",{className:"card space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Paso 3: Servicios o Productos"}),l.services&&e.jsx("p",{className:"form-error",children:l.services}),s.services.map((r,c)=>e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h3",{className:"font-semibold",children:["Servicio/Producto #",c+1]}),s.services.length>1&&e.jsx("button",{onClick:()=>n(c),className:"text-red-500 hover:text-red-700 text-sm",children:"✕ Eliminar"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Nombre del Servicio"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"Ej: Tortas Personalizadas",value:r.name,onChange:o=>i(c,"name",o.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Precio (Opcional)"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"Ej: Desde $15.000",value:r.price,onChange:o=>i(c,"price",o.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Descripción"}),e.jsx("textarea",{className:"form-input",rows:3,placeholder:"Describe este servicio o producto...",value:r.description,onChange:o=>i(c,"description",o.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Emoji/Icono"}),e.jsx("input",{type:"text",className:"form-input",maxLength:2,placeholder:"⭐",value:r.icon,onChange:o=>i(c,"icon",o.target.value)})]})]},c)),s.services.length<6&&e.jsx("button",{onClick:a,className:"w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-gray-600 hover:text-blue-600 font-medium",children:"+ Agregar Servicio/Producto"})]})}function z({formData:s,errors:l,onChange:t}){const a=()=>{t("schedule",[...s.schedule,{day:"",open:"09:00",close:"18:00"}])},i=(r,c,o)=>{const m=[...s.schedule];m[r][c]=o,t("schedule",m)},n=r=>{const c=s.schedule.filter((o,m)=>m!==r);t("schedule",c)};return e.jsxs("div",{className:"card space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Paso 4: Información de Contacto"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"WhatsApp (sin +56) *"}),e.jsx("input",{type:"tel",className:"form-input",placeholder:"912345678",value:s.whatsapp,onChange:r=>t("whatsapp",r.target.value.replace(/\D/g,""))}),l.whatsapp&&e.jsx("p",{className:"form-error",children:l.whatsapp})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Teléfono *"}),e.jsx("input",{type:"tel",className:"form-input",placeholder:"+56 9 1234 5678",value:s.phone,onChange:r=>t("phone",r.target.value)}),l.phone&&e.jsx("p",{className:"form-error",children:l.phone})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Mensaje Predeterminado WhatsApp"}),e.jsx("input",{type:"text",className:"form-input",value:s.whatsappMessage,onChange:r=>t("whatsappMessage",r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Email *"}),e.jsx("input",{type:"email",className:"form-input",placeholder:"contacto@tunegocio.cl",value:s.email,onChange:r=>t("email",r.target.value)}),l.email&&e.jsx("p",{className:"form-error",children:l.email})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Dirección *"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"Av. Principal 123, Quilicura",value:s.address,onChange:r=>t("address",r.target.value)}),l.address&&e.jsx("p",{className:"form-error",children:l.address})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Horarios de Atención"}),s.schedule.map((r,c)=>e.jsxs("div",{className:"grid grid-cols-4 gap-2 mb-2",children:[e.jsx("input",{type:"text",className:"form-input col-span-1",placeholder:"Lunes",value:r.day,onChange:o=>i(c,"day",o.target.value)}),e.jsx("input",{type:"time",className:"form-input",value:r.open,onChange:o=>i(c,"open",o.target.value)}),e.jsx("input",{type:"time",className:"form-input",value:r.close,onChange:o=>i(c,"close",o.target.value)}),s.schedule.length>1&&e.jsx("button",{onClick:()=>n(c),className:"text-red-500 hover:text-red-700",children:"✕"})]},c)),e.jsx("button",{onClick:a,className:"text-blue-600 hover:text-blue-800 text-sm mt-2",children:"+ Agregar horario"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Instagram (Opcional)"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"@tunegocio",value:s.instagram,onChange:r=>t("instagram",r.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Facebook (Opcional)"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"facebook.com/tunegocio",value:s.facebook,onChange:r=>t("facebook",r.target.value)})]})]})]})}function q({formData:s,errors:l,onChange:t}){return e.jsxs("div",{className:"card space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Paso 5: Características Opcionales"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("label",{className:"flex items-center space-x-3 cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5",checked:s.includeGallery,onChange:a=>t("includeGallery",a.target.checked)}),e.jsx("span",{className:"font-medium",children:"Incluir Galería de Imágenes"})]}),e.jsxs("label",{className:"flex items-center space-x-3 cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5",checked:s.includeContactForm,onChange:a=>t("includeContactForm",a.target.checked)}),e.jsx("span",{className:"font-medium",children:"Incluir Formulario de Contacto"})]}),e.jsxs("label",{className:"flex items-center space-x-3 cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5",checked:s.includeMap,onChange:a=>t("includeMap",a.target.checked)}),e.jsx("span",{className:"font-medium",children:"Incluir Mapa de Ubicación"})]})]}),e.jsxs("div",{className:"border-t pt-6 mt-6",children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Analytics y Tracking (Opcional)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Google Analytics 4 ID"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"G-XXXXXXXXXX",value:s.ga4Id,onChange:a=>t("ga4Id",a.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{className:"form-label",children:"Microsoft Clarity ID"}),e.jsx("input",{type:"text",className:"form-input",placeholder:"abcdefghij",value:s.clarityId,onChange:a=>t("clarityId",a.target.value)})]})]})]})]})}function V({formData:s,currentStep:l,errors:t,onFieldChange:a,onNext:i,onBack:n}){const r=()=>{switch(l){case 1:return e.jsx(U,{formData:s,errors:t,onChange:a});case 2:return e.jsx(W,{formData:s,errors:t,onChange:a});case 3:return e.jsx(F,{formData:s,errors:t,onChange:a});case 4:return e.jsx(z,{formData:s,errors:t,onChange:a});case 5:return e.jsx(q,{formData:s,errors:t,onChange:a});default:return null}};return e.jsxs("div",{className:"space-y-6 fade-in",children:[e.jsx(H,{currentStep:l}),e.jsx("div",{className:"slide-in",children:r()}),e.jsxs("div",{className:"flex justify-between mt-8",children:[e.jsx("button",{onClick:n,disabled:l===1,className:"btn-secondary disabled:opacity-50 disabled:cursor-not-allowed",children:"← Anterior"}),l<5?e.jsx("button",{onClick:i,className:"btn-primary",children:"Siguiente →"}):e.jsx("button",{onClick:i,className:"btn-primary bg-green-600 hover:bg-green-700",children:"✓ Finalizar"})]})]})}function X({html:s}){const l=u.useRef(null);return u.useEffect(()=>{if(l.current&&s){const t=l.current,a=t.contentDocument||t.contentWindow.document;a.open(),a.write(s),a.close()}},[s]),e.jsxs("div",{className:"card sticky top-4",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"Vista Previa"}),e.jsx("div",{className:"border border-gray-300 rounded-lg overflow-hidden bg-white",style:{height:"600px"},children:e.jsx("iframe",{ref:l,className:"preview-container",title:"Vista previa del sitio",sandbox:"allow-same-origin"})}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"⚠️ Preview simplificado. El sitio final incluirá estilos completos."})]})}function D({formData:s,generatedFiles:l,isGenerating:t,onGenerate:a}){const i=async()=>{if(!l){alert("Primero genera el sitio");return}try{const n=new _;Object.entries(l).forEach(([o,m])=>{n.file(o,m)});const r=await n.generateAsync({type:"blob"}),c=s.businessName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");P.saveAs(r,`${c}-microsite.zip`)}catch(n){console.error("Error creating ZIP:",n),alert("Error al crear el archivo ZIP")}};return e.jsxs("div",{className:"card sticky top-4",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"Generar y Exportar"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{onClick:a,disabled:t,className:"w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed",children:t?"⏳ Generando...":"🚀 Generar Sitio Completo"}),l&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:i,className:"w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all",children:"📦 Descargar ZIP"}),e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm",children:[e.jsx("h4",{className:"font-bold text-blue-900 mb-2",children:"✓ Sitio Generado"}),e.jsxs("ul",{className:"text-blue-800 space-y-1",children:[e.jsx("li",{children:"• HTML optimizado"}),e.jsx("li",{children:"• Tailwind CSS v4"}),e.jsx("li",{children:"• JavaScript funcional"}),e.jsx("li",{children:"• Configuración completa"}),e.jsx("li",{children:"• Listo para Cloudflare Pages"})]})]}),e.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Próximos pasos:"}),e.jsxs("ol",{className:"list-decimal list-inside space-y-1 text-gray-700",children:[e.jsx("li",{children:"Descarga el ZIP"}),e.jsx("li",{children:"Descomprime los archivos"}),e.jsxs("li",{children:["Ejecuta ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"npm install"})]}),e.jsxs("li",{children:["Ejecuta ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"npm run build"})]}),e.jsxs("li",{children:["Deploy con ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"npm run deploy"})]})]})]})]})]})]})}function b(s,l){let t=s;return Object.entries(l).forEach(([a,i])=>{const n=new RegExp(`\\[${a}\\]`,"g");t=t.replace(n,i||"")}),t}function J(s){return s.filter(l=>l.name.trim()).map(l=>`
      <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div class="text-4xl mb-4">${l.icon}</div>
        <h3 class="text-xl font-bold mb-2">${l.name}</h3>
        ${l.price?`<p class="text-blue-600 font-semibold mb-3">${l.price}</p>`:""}
        <p class="text-gray-600">${l.description}</p>
      </div>
    `).join(`
`)}function Y(s){return s.filter(l=>l.day.trim()).map(l=>`
      <div class="flex justify-between">
        <span class="font-medium">${l.day}</span>
        <span class="text-gray-600">${l.open} - ${l.close}</span>
      </div>
    `).join(`
`)}function Q(s){return!s||s.length===0?"":s.map((l,t)=>`
    <div class="gallery-item">
      <img src="${l}" alt="Galería ${t+1}" loading="lazy" />
    </div>
  `).join(`
`)}const Z=`<!DOCTYPE html>
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
  <\/script>
  
  <link rel="stylesheet" href="./styles/main.css">
  <script async src="https://www.googletagmanager.com/gtag/js?id=[GA4_MEASUREMENT_ID]"><\/script>
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
  
  <script src="./js/menu.js"><\/script>
  <script src="./js/whatsapp.js"><\/script>
  <script src="./js/analytics.js"><\/script>
</body>
</html>`,K=`{
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
}`,ee=`# [NOMBRE_NEGOCIO]

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
`;async function f(s){const l=s.businessName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),t={NOMBRE_NEGOCIO:s.businessName,NOMBRE_NEGOCIO_SLUG:l,SLOGAN:s.slogan,DESCRIPCION_CORTA:s.shortDescription,DESCRIPCION_LARGA:s.longDescription,DESCRIPCION_SEO:s.shortDescription.substring(0,160),KEYWORDS:`${s.businessName}, ${s.industry}, ${s.city}`,WHATSAPP_NUMBER:s.whatsapp,WHATSAPP_MESSAGE:encodeURIComponent(s.whatsappMessage),TELEFONO:s.phone,EMAIL:s.email,DIRECCION:s.address,CIUDAD:s.city,REGION:s.region,COLOR_PRIMARIO:s.primaryColor,COLOR_SECUNDARIO:s.secondaryColor,COLOR_ACENTO:s.accentColor,GA4_MEASUREMENT_ID:s.ga4Id||"",CLARITY_PROJECT_ID:s.clarityId||"",SERVICIOS_HTML:J(s.services),HORARIOS_HTML:Y(s.schedule),GALLERY_IMAGES_HTML:s.includeGallery?Q(s.galleryImages):"",ANIO_ACTUAL:new Date().getFullYear(),SITE_URL:`https://${l}.cl`,HERO_IMAGE:s.heroImage||"https://placehold.co/1920x1080/1e40af/ffffff?text=Hero+Image",INSTAGRAM:s.instagram,FACEBOOK:s.facebook},a={};return a["package.json"]=b(K,t),a["README.md"]=b(ee,t),a["src/index.html"]=b(Z,t),a["vite.config.js"]=`import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});`,a["tailwind.config.js"]=`export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '${s.primaryColor}',
        secondary: '${s.secondaryColor}',
        accent: '${s.accentColor}'
      }
    }
  }
};`,a["postcss.config.js"]=`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};`,a["src/styles/main.css"]=`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: ${s.primaryColor};
  --color-secondary: ${s.secondaryColor};
  --color-accent: ${s.accentColor};
}`,a["src/js/menu.js"]=`document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});`,a["src/js/whatsapp.js"]=`document.querySelectorAll('[data-wa-cta]').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const location = this.dataset.waCta;
    console.log('WhatsApp CTA clicked:', location);
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        'location': location
      });
    }
  });
});`,s.ga4Id&&(a["src/js/analytics.js"]=`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${s.ga4Id}');`),a[".gitignore"]=`node_modules/
dist/
.env
*.log`,a["wrangler.toml"]=`name = "${l}"
compatibility_date = "2024-11-01"

[build]
command = "npm run build"

[[pages_build_output_dir]]
directory = "dist"`,a}function se(){const[s,l]=u.useState({businessName:"",industry:"",slogan:"",shortDescription:"",longDescription:"",city:"Quilicura",region:"Metropolitana",logo:null,primaryColor:"#1E40AF",secondaryColor:"#10B981",accentColor:"#F59E0B",heroImage:null,services:[{name:"",description:"",price:"",icon:"⭐"}],phone:"",whatsapp:"",whatsappMessage:"¡Hola! Me interesa saber más sobre sus servicios.",email:"",address:"",schedule:[{day:"Lunes-Viernes",open:"09:00",close:"18:00"}],instagram:"",facebook:"",includeGallery:!1,galleryImages:[],includeContactForm:!1,includeMap:!1,ga4Id:"",clarityId:""}),[t,a]=u.useState(1),[i,n]=u.useState(!1),[r,c]=u.useState(null),[o,m]=u.useState(""),[j,g]=u.useState({}),I=(p,d)=>{l(h=>({...h,[p]:d})),j[p]&&g(h=>{const y={...h};return delete y[p],y})},O=p=>{const d={};return p===1&&(s.businessName.trim()||(d.businessName="El nombre del negocio es requerido"),s.industry||(d.industry="Selecciona un rubro"),s.slogan.trim()||(d.slogan="El slogan es requerido"),s.shortDescription.split(" ").filter(h=>h).length<50&&(d.shortDescription="La descripción corta debe tener al menos 50 palabras"),s.longDescription.split(" ").filter(h=>h).length<200&&(d.longDescription="La descripción larga debe tener al menos 200 palabras")),p===3&&s.services.every(h=>!h.name.trim())&&(d.services="Debes agregar al menos un servicio"),p===4&&(s.whatsapp.trim()||(d.whatsapp="El WhatsApp es requerido"),s.phone.trim()||(d.phone="El teléfono es requerido"),s.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)||(d.email="Email inválido"):d.email="El email es requerido",s.address.trim()||(d.address="La dirección es requerida")),d},w=()=>{const p=O(t);if(Object.keys(p).length>0){g(p);return}g({}),a(d=>Math.min(d+1,5))},A=()=>{a(p=>Math.max(p-1,1))},S=async()=>{n(!0);try{const p=await f(s);c(p),m(p["src/index.html"]||"")}catch(p){console.error("Error generando sitio:",p),alert("Error al generar el sitio. Por favor intenta nuevamente.")}finally{n(!1)}};return u.useEffect(()=>{if(t>=2&&s.businessName){const p=setTimeout(async()=>{try{const d=await f(s);m(d["src/index.html"]||"")}catch(d){console.error("Error en preview:",d)}},500);return()=>clearTimeout(p)}},[s,t]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50",children:[e.jsx("header",{className:"bg-white shadow-md border-b-4 border-blue-600",children:e.jsx("div",{className:"container mx-auto px-4 py-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-blue-600",children:"🚀 MS 2025 Site Generator"}),e.jsx("p",{className:"text-gray-600 mt-1 text-sm md:text-base",children:"Constructor Inteligente de Micro-Sitios Comunitarios"})]}),e.jsx("div",{className:"hidden md:block",children:e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"text-sm text-gray-500",children:["Paso ",t," de 5"]}),e.jsx("div",{className:"w-32 bg-gray-200 rounded-full h-2 mt-1",children:e.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:{width:`${t/5*100}%`}})})]})})]})})}),e.jsx("main",{className:"container mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid lg:grid-cols-3 gap-6 lg:gap-8",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsx(V,{formData:s,currentStep:t,errors:j,onFieldChange:I,onNext:w,onBack:A})}),e.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[t>=2&&o&&e.jsx(X,{html:o}),t===5&&e.jsx(D,{formData:s,generatedFiles:r,isGenerating:i,onGenerate:S})]})]})}),e.jsx("footer",{className:"mt-16 bg-gray-900 text-white py-8",children:e.jsx("div",{className:"container mx-auto px-4 text-center",children:e.jsx("p",{className:"text-sm text-gray-400",children:"© 2025 MS 2025 - Micro-Sitios Quilicura | Construido con ❤️ para emprendedores chilenos"})})})]})}v.createRoot(document.getElementById("root")).render(e.jsx(M.StrictMode,{children:e.jsx(se,{})}));
