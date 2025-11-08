function ProgressIndicator({ currentStep }) {
  const steps = [
    { number: 1, label: 'Datos Básicos' },
    { number: 2, label: 'Branding' },
    { number: 3, label: 'Servicios' },
    { number: 4, label: 'Contacto' },
    { number: 5, label: 'Características' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`step-indicator ${
                  currentStep === step.number
                    ? 'step-active'
                    : currentStep > step.number
                    ? 'step-completed'
                    : 'step-inactive'
                }`}
              >
                {currentStep > step.number ? '✓' : step.number}
              </div>
              <span className={`text-xs mt-2 font-medium ${
                currentStep === step.number ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 rounded ${
                currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressIndicator;
