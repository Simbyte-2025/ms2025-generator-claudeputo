import { useState, useEffect } from 'react';
import FormWizard from './components/FormWizard';
import PreviewPanel from './components/PreviewPanel';
import ExportPanel from './components/ExportPanel';
import { generateSiteFiles } from './utils/codeGenerator';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    slogan: '',
    shortDescription: '',
    longDescription: '',
    city: 'Quilicura',
    region: 'Metropolitana',
    logo: null,
    primaryColor: '#1E40AF',
    secondaryColor: '#10B981',
    accentColor: '#F59E0B',
    heroImage: null,
    services: [
      { name: '', description: '', price: '', icon: '⭐' }
    ],
    phone: '',
    whatsapp: '',
    whatsappMessage: '¡Hola! Me interesa saber más sobre sus servicios.',
    email: '',
    address: '',
    schedule: [
      { day: 'Lunes-Viernes', open: '09:00', close: '18:00' }
    ],
    instagram: '',
    facebook: '',
    includeGallery: false,
    galleryImages: [],
    includeContactForm: false,
    includeMap: false,
    ga4Id: '',
    clarityId: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedFiles, setGeneratedFiles] = useState(null);
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.businessName.trim()) {newErrors.businessName = 'El nombre del negocio es requerido';}
      if (!formData.industry) {newErrors.industry = 'Selecciona un rubro';}
      if (!formData.slogan.trim()) {newErrors.slogan = 'El slogan es requerido';}
      if (formData.shortDescription.split(' ').filter(w => w).length < 50) {
        newErrors.shortDescription = 'La descripción corta debe tener al menos 50 palabras';
      }
      if (formData.longDescription.split(' ').filter(w => w).length < 200) {
        newErrors.longDescription = 'La descripción larga debe tener al menos 200 palabras';
      }
    }
    
    if (step === 3) {
      if (formData.services.every(s => !s.name.trim())) {
        newErrors.services = 'Debes agregar al menos un servicio';
      }
    }
    
    if (step === 4) {
      if (!formData.whatsapp.trim()) {newErrors.whatsapp = 'El WhatsApp es requerido';}
      if (!formData.phone.trim()) {newErrors.phone = 'El teléfono es requerido';}
      if (!formData.email.trim()) {newErrors.email = 'El email es requerido';}
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email inválido';
      }
      if (!formData.address.trim()) {newErrors.address = 'La dirección es requerida';}
    }
    
    return newErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const files = await generateSiteFiles(formData);
      setGeneratedFiles(files);
      setGeneratedHTML(files['src/index.html'] || '');
    } catch (error) {
      console.error('Error generando sitio:', error);
      alert('Error al generar el sitio. Por favor intenta nuevamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (currentStep >= 2 && formData.businessName) {
      const timeoutId = setTimeout(async () => {
        try {
          const files = await generateSiteFiles(formData);
          setGeneratedHTML(files['src/index.html'] || '');
        } catch (error) {
          console.error('Error en preview:', error);
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [formData, currentStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-md border-b-4 border-blue-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
                🚀 MS 2025 Site Generator
              </h1>
              <p className="text-gray-600 mt-1 text-sm md:text-base">
                Constructor Inteligente de Micro-Sitios Comunitarios
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-sm text-gray-500">Paso {currentStep} de 5</p>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <FormWizard
              formData={formData}
              currentStep={currentStep}
              errors={errors}
              onFieldChange={handleFieldChange}
              onNext={handleNext}
              onBack={handleBack}
            />
          </div>

          <div className="lg:col-span-1 space-y-6">
            {currentStep >= 2 && generatedHTML && (
              <PreviewPanel html={generatedHTML} />
            )}
            {currentStep === 5 && (
              <ExportPanel
                formData={formData}
                generatedFiles={generatedFiles}
                isGenerating={isGenerating}
                onGenerate={handleGenerate}
              />
            )}
          </div>
        </div>
      </main>

      <footer className="mt-16 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 MS 2025 - Micro-Sitios Quilicura | Construido con ❤️ para emprendedores chilenos
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
