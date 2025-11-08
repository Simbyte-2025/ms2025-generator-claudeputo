// StepBranding.jsx
export function StepBranding({ formData, errors, onChange }) {
  return (
    <div className="card space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 2: Branding e Identidad Visual</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="form-label">Color Primario</label>
          <input
            type="color"
            className="form-input h-12"
            value={formData.primaryColor}
            onChange={(e) => onChange('primaryColor', e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">{formData.primaryColor}</p>
        </div>
        <div>
          <label className="form-label">Color Secundario</label>
          <input
            type="color"
            className="form-input h-12"
            value={formData.secondaryColor}
            onChange={(e) => onChange('secondaryColor', e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">{formData.secondaryColor}</p>
        </div>
        <div>
          <label className="form-label">Color de Acento</label>
          <input
            type="color"
            className="form-input h-12"
            value={formData.accentColor}
            onChange={(e) => onChange('accentColor', e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">{formData.accentColor}</p>
        </div>
      </div>

      <div>
        <label className="form-label">URL Imagen Hero (Opcional)</label>
        <input
          type="url"
          className="form-input"
          placeholder="https://ejemplo.com/imagen-hero.jpg"
          value={formData.heroImage || ''}
          onChange={(e) => onChange('heroImage', e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">Recomendado: 1920x1080px, formato JPG/WebP</p>
      </div>
    </div>
  );
}

// StepServices.jsx
export function StepServices({ formData, errors, onChange }) {
  const addService = () => {
    onChange('services', [...formData.services, { name: '', description: '', price: '', icon: '⭐' }]);
  };

  const updateService = (index, field, value) => {
    const updated = [...formData.services];
    updated[index][field] = value;
    onChange('services', updated);
  };

  const removeService = (index) => {
    const updated = formData.services.filter((_, i) => i !== index);
    onChange('services', updated);
  };

  return (
    <div className="card space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 3: Servicios o Productos</h2>
      
      {errors.services && <p className="form-error">{errors.services}</p>}

      {formData.services.map((service, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Servicio/Producto #{index + 1}</h3>
            {formData.services.length > 1 && (
              <button
                onClick={() => removeService(index)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                ✕ Eliminar
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="form-label">Nombre del Servicio</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ej: Tortas Personalizadas"
                value={service.name}
                onChange={(e) => updateService(index, 'name', e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Precio (Opcional)</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ej: Desde $15.000"
                value={service.price}
                onChange={(e) => updateService(index, 'price', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="form-label">Descripción</label>
            <textarea
              className="form-input"
              rows={3}
              placeholder="Describe este servicio o producto..."
              value={service.description}
              onChange={(e) => updateService(index, 'description', e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Emoji/Icono</label>
            <input
              type="text"
              className="form-input"
              maxLength={2}
              placeholder="⭐"
              value={service.icon}
              onChange={(e) => updateService(index, 'icon', e.target.value)}
            />
          </div>
        </div>
      ))}

      {formData.services.length < 6 && (
        <button
          onClick={addService}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-gray-600 hover:text-blue-600 font-medium"
        >
          + Agregar Servicio/Producto
        </button>
      )}
    </div>
  );
}

// StepContact.jsx
export function StepContact({ formData, errors, onChange }) {
  const addSchedule = () => {
    onChange('schedule', [...formData.schedule, { day: '', open: '09:00', close: '18:00' }]);
  };

  const updateSchedule = (index, field, value) => {
    const updated = [...formData.schedule];
    updated[index][field] = value;
    onChange('schedule', updated);
  };

  const removeSchedule = (index) => {
    const updated = formData.schedule.filter((_, i) => i !== index);
    onChange('schedule', updated);
  };

  return (
    <div className="card space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 4: Información de Contacto</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">WhatsApp (sin +56) *</label>
          <input
            type="tel"
            className="form-input"
            placeholder="912345678"
            value={formData.whatsapp}
            onChange={(e) => onChange('whatsapp', e.target.value.replace(/\D/g, ''))}
          />
          {errors.whatsapp && <p className="form-error">{errors.whatsapp}</p>}
        </div>

        <div>
          <label className="form-label">Teléfono *</label>
          <input
            type="tel"
            className="form-input"
            placeholder="+56 9 1234 5678"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="form-label">Mensaje Predeterminado WhatsApp</label>
        <input
          type="text"
          className="form-input"
          value={formData.whatsappMessage}
          onChange={(e) => onChange('whatsappMessage', e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Email *</label>
        <input
          type="email"
          className="form-input"
          placeholder="contacto@tunegocio.cl"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div>
        <label className="form-label">Dirección *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Av. Principal 123, Quilicura"
          value={formData.address}
          onChange={(e) => onChange('address', e.target.value)}
        />
        {errors.address && <p className="form-error">{errors.address}</p>}
      </div>

      <div>
        <h3 className="font-semibold mb-3">Horarios de Atención</h3>
        {formData.schedule.map((sch, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 mb-2">
            <input
              type="text"
              className="form-input col-span-1"
              placeholder="Lunes"
              value={sch.day}
              onChange={(e) => updateSchedule(index, 'day', e.target.value)}
            />
            <input
              type="time"
              className="form-input"
              value={sch.open}
              onChange={(e) => updateSchedule(index, 'open', e.target.value)}
            />
            <input
              type="time"
              className="form-input"
              value={sch.close}
              onChange={(e) => updateSchedule(index, 'close', e.target.value)}
            />
            {formData.schedule.length > 1 && (
              <button
                onClick={() => removeSchedule(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addSchedule}
          className="text-blue-600 hover:text-blue-800 text-sm mt-2"
        >
          + Agregar horario
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Instagram (Opcional)</label>
          <input
            type="text"
            className="form-input"
            placeholder="@tunegocio"
            value={formData.instagram}
            onChange={(e) => onChange('instagram', e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Facebook (Opcional)</label>
          <input
            type="text"
            className="form-input"
            placeholder="facebook.com/tunegocio"
            value={formData.facebook}
            onChange={(e) => onChange('facebook', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

// StepFeatures.jsx
export function StepFeatures({ formData, errors, onChange }) {
  return (
    <div className="card space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 5: Características Opcionales</h2>

      <div className="space-y-4">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={formData.includeGallery}
            onChange={(e) => onChange('includeGallery', e.target.checked)}
          />
          <span className="font-medium">Incluir Galería de Imágenes</span>
        </label>

        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={formData.includeContactForm}
            onChange={(e) => onChange('includeContactForm', e.target.checked)}
          />
          <span className="font-medium">Incluir Formulario de Contacto</span>
        </label>

        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={formData.includeMap}
            onChange={(e) => onChange('includeMap', e.target.checked)}
          />
          <span className="font-medium">Incluir Mapa de Ubicación</span>
        </label>
      </div>

      <div className="border-t pt-6 mt-6">
        <h3 className="font-semibold mb-4">Analytics y Tracking (Opcional)</h3>
        
        <div className="space-y-4">
          <div>
            <label className="form-label">Google Analytics 4 ID</label>
            <input
              type="text"
              className="form-input"
              placeholder="G-XXXXXXXXXX"
              value={formData.ga4Id}
              onChange={(e) => onChange('ga4Id', e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Microsoft Clarity ID</label>
            <input
              type="text"
              className="form-input"
              placeholder="abcdefghij"
              value={formData.clarityId}
              onChange={(e) => onChange('clarityId', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
