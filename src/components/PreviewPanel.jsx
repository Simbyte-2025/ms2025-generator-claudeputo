import { useEffect, useRef } from 'react';

function PreviewPanel({ html }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current && html) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(html);
      doc.close();
    }
  }, [html]);

  return (
    <div className="card sticky top-4">
      <h3 className="text-lg font-bold mb-4">Vista Previa</h3>
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-white" style={{ height: '600px' }}>
        <iframe
          ref={iframeRef}
          className="preview-container"
          title="Vista previa del sitio"
          sandbox="allow-same-origin"
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">
        ⚠️ Preview simplificado. El sitio final incluirá estilos completos.
      </p>
    </div>
  );
}

export default PreviewPanel;
