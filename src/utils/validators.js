export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 8 && cleaned.length <= 11;
}

export function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function validateWordCount(text, min, max) {
  const words = text.split(/\s+/).filter(w => w.length > 0);
  return words.length >= min && words.length <= max;
}

export function validateRequired(value) {
  return value && value.toString().trim().length > 0;
}

export function validateColor(color) {
  return /^#[0-9A-F]{6}$/i.test(color);
}

export function validateStep(step, formData) {
  const errors = {};
  
  switch (step) {
    case 1:
      if (!validateRequired(formData.businessName)) {
        errors.businessName = 'El nombre del negocio es requerido';
      }
      if (!validateRequired(formData.industry)) {
        errors.industry = 'Selecciona un rubro';
      }
      if (!validateRequired(formData.slogan)) {
        errors.slogan = 'El slogan es requerido';
      }
      if (!validateWordCount(formData.shortDescription, 50, 100)) {
        errors.shortDescription = 'La descripción corta debe tener entre 50 y 100 palabras';
      }
      if (!validateWordCount(formData.longDescription, 200, 300)) {
        errors.longDescription = 'La descripción larga debe tener entre 200 y 300 palabras';
      }
      break;
      
    case 2:
      if (!validateColor(formData.primaryColor)) {
        errors.primaryColor = 'Color primario inválido';
      }
      if (!validateColor(formData.secondaryColor)) {
        errors.secondaryColor = 'Color secundario inválido';
      }
      if (!validateColor(formData.accentColor)) {
        errors.accentColor = 'Color de acento inválido';
      }
      if (formData.heroImage && !validateURL(formData.heroImage)) {
        errors.heroImage = 'URL de imagen inválida';
      }
      break;
      
    case 3:
      const validServices = formData.services.filter(s => s.name.trim());
      if (validServices.length === 0) {
        errors.services = 'Debes agregar al menos un servicio';
      }
      break;
      
    case 4:
      if (!validatePhone(formData.whatsapp)) {
        errors.whatsapp = 'Número de WhatsApp inválido';
      }
      if (!validatePhone(formData.phone)) {
        errors.phone = 'Número de teléfono inválido';
      }
      if (!validateEmail(formData.email)) {
        errors.email = 'Email inválido';
      }
      if (!validateRequired(formData.address)) {
        errors.address = 'La dirección es requerida';
      }
      break;
      
    case 5:
      if (formData.ga4Id && !/^G-[A-Z0-9]+$/.test(formData.ga4Id)) {
        errors.ga4Id = 'ID de Google Analytics inválido (debe ser G-XXXXXXXXXX)';
      }
      break;
  }
  
  return errors;
}
