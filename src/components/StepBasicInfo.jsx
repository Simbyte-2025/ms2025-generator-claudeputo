function StepBasicInfo({ formData, errors, onChange }) {
  return (
    <div className="card space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 1: Datos Básicos del Negocio</h2>

      <div>
        <label className="form-label">Nombre del Negocio *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Ej: Pastelería Dulce Hogar"
          value={formData.businessName}
          onChange={(e) => onChange('businessName', e.target.value)}
        />
        {errors.businessName && <p className="form-error">{errors.businessName}</p>}
      </div>

      <div>
        <label className="form-label">Rubro/Industria *</label>
        <select
          className="form-input"
          value={formData.industry}
          onChange={(e) => onChange('industry', e.target.value)}
        >
          <option value="">Selecciona un rubro</option>
          <option value="Gastronomía">Gastronomía</option>
          <option value="Retail">Retail</option>
          <option value="Servicios">Servicios</option>
          <option value="Artesanías">Artesanías</option>
          <option value="Belleza">Belleza</option>
          <option value="Salud">Salud</option>
          <option value="Educación">Educación</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.industry && <p className="form-error">{errors.industry}</p>}
      </div>

      <div>
        <label className="form-label">Slogan *</label>
        <input
          type="text"
          className="form-input"
          placeholder="Ej: Los mejores pasteles artesanales de Quilicura"
          maxLength={100}
          value={formData.slogan}
          onChange={(e) => onChange('slogan', e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">{formData.slogan.length}/100 caracteres</p>
      </div>

      <div>
        <label className="form-label">Descripción Corta (50-100 palabras) *</label>
        <textarea
          className="form-input"
          rows={4}
          placeholder="Descripción breve de tu negocio..."
          value={formData.shortDescription}
          onChange={(e) => onChange('shortDescription', e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">
          {formData.shortDescription.split(' ').filter(w => w).length} palabras
        </p>
        {errors.shortDescription && <p className="form-error">{errors.shortDescription}</p>}
      </div>

      <div>
        <label className="form-label">Descripción Larga (200-300 palabras) *</label>
        <textarea
          className="form-input"
          rows={8}
          placeholder="Descripción extendida de tu negocio, historia, valores..."
          value={formData.longDescription}
          onChange={(e) => onChange('longDescription', e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">
          {formData.longDescription.split(' ').filter(w => w).length} palabras
        </p>
        {errors.longDescription && <p className="form-error">{errors.longDescription}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Ciudad *</label>
          <select
            className="form-input"
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
          >
            <option value="Quilicura">Quilicura</option>
            <option value="Santiago">Santiago</option>
            <option value="Valparaíso">Valparaíso</option>
            <option value="Concepción">Concepción</option>
            <option value="La Serena">La Serena</option>
            <option value="Temuco">Temuco</option>
            <option value="Puerto Montt">Puerto Montt</option>
            <option value="Punta Arenas">Punta Arenas</option>
          </select>
        </div>
        <div>
          <label className="form-label">Región *</label>
          <select
            className="form-input"
            value={formData.region}
            onChange={(e) => onChange('region', e.target.value)}
          >
            <option value="Metropolitana">Metropolitana</option>
            <option value="Valparaíso">Valparaíso</option>
            <option value="Biobío">Biobío</option>
            <option value="Coquimbo">Coquimbo</option>
            <option value="Araucanía">Araucanía</option>
            <option value="Los Lagos">Los Lagos</option>
            <option value="Magallanes">Magallanes</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default StepBasicInfo;
