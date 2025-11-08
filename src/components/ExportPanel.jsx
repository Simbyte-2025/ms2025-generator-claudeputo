import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function ExportPanel({ formData, generatedFiles, isGenerating, onGenerate }) {
  const handleDownloadZIP = async () => {
    if (!generatedFiles) {
      alert('Primero genera el sitio');
      return;
    }

    try {
      const zip = new JSZip();
      
      Object.entries(generatedFiles).forEach(([path, content]) => {
        zip.file(path, content);
      });

      const blob = await zip.generateAsync({ type: 'blob' });
      const slug = formData.businessName
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      saveAs(blob, `${slug}-microsite.zip`);
    } catch (error) {
      console.error('Error creating ZIP:', error);
      alert('Error al crear el archivo ZIP');
    }
  };

  return (
    <div className="card sticky top-4">
      <h3 className="text-lg font-bold mb-4">Generar y Exportar</h3>
      
      <div className="space-y-4">
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? '⏳ Generando...' : '🚀 Generar Sitio Completo'}
        </button>

        {generatedFiles && (
          <>
            <button
              onClick={handleDownloadZIP}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              📦 Descargar ZIP
            </button>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
              <h4 className="font-bold text-blue-900 mb-2">✓ Sitio Generado</h4>
              <ul className="text-blue-800 space-y-1">
                <li>• HTML optimizado</li>
                <li>• Tailwind CSS v4</li>
                <li>• JavaScript funcional</li>
                <li>• Configuración completa</li>
                <li>• Listo para Cloudflare Pages</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs">
              <h4 className="font-semibold mb-2">Próximos pasos:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Descarga el ZIP</li>
                <li>Descomprime los archivos</li>
                <li>Ejecuta <code className="bg-gray-200 px-1 rounded">npm install</code></li>
                <li>Ejecuta <code className="bg-gray-200 px-1 rounded">npm run build</code></li>
                <li>Deploy con <code className="bg-gray-200 px-1 rounded">npm run deploy</code></li>
              </ol>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExportPanel;
