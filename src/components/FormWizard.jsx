import ProgressIndicator from './ProgressIndicator';
import StepBasicInfo from './StepBasicInfo';
import StepBranding from './StepBranding';
import StepServices from './StepServices';
import StepContact from './StepContact';
import StepFeatures from './StepFeatures';

function FormWizard({ formData, currentStep, errors, onFieldChange, onNext, onBack }) {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepBasicInfo formData={formData} errors={errors} onChange={onFieldChange} />;
      case 2:
        return <StepBranding formData={formData} errors={errors} onChange={onFieldChange} />;
      case 3:
        return <StepServices formData={formData} errors={errors} onChange={onFieldChange} />;
      case 4:
        return <StepContact formData={formData} errors={errors} onChange={onFieldChange} />;
      case 5:
        return <StepFeatures formData={formData} errors={errors} onChange={onFieldChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <ProgressIndicator currentStep={currentStep} />
      
      <div className="slide-in">
        {renderStep()}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          disabled={currentStep === 1}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Anterior
        </button>
        
        {currentStep < 5 ? (
          <button onClick={onNext} className="btn-primary">
            Siguiente →
          </button>
        ) : (
          <button onClick={onNext} className="btn-primary bg-green-600 hover:bg-green-700">
            ✓ Finalizar
          </button>
        )}
      </div>
    </div>
  );
}

export default FormWizard;
