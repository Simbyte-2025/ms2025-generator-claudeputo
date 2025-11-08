export const ANALYTICS_JS_TEMPLATE = `// Google Analytics 4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '[GA4_MEASUREMENT_ID]');

// Track WhatsApp clicks
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-wa-cta]').forEach(btn => {
    btn.addEventListener('click', function() {
      const location = this.dataset.waCta;
      gtag('event', 'whatsapp_click', {
        'location': location
      });
    });
  });
});`;

export const WHATSAPP_JS_TEMPLATE = `// WhatsApp CTA tracking
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-wa-cta]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const location = this.dataset.waCta;
      console.log('WhatsApp CTA clicked:', location);
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
          'location': location
        });
      }
    });
  });
});`;

export const GALLERY_JS_TEMPLATE = `// Simple gallery with lightbox
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  
  galleryItems.forEach(img => {
    img.addEventListener('click', function() {
      const lightbox = document.createElement('div');
      lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
      lightbox.onclick = () => lightbox.remove();
      
      const imgClone = this.cloneNode();
      imgClone.className = 'max-w-full max-h-full object-contain';
      
      lightbox.appendChild(imgClone);
      document.body.appendChild(lightbox);
    });
  });
});`;

export const MENU_JS_TEMPLATE = `// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});`;

export const CONTACT_FORM_JS_TEMPLATE = `// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Here you would send to your backend or service
      console.log('Form submitted:', data);
      
      // Show success message
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      form.reset();
    });
  }
});`;
