import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export async function createZipFromFiles(files, filename) {
  try {
    const zip = new JSZip();
    
    Object.entries(files).forEach(([path, content]) => {
      zip.file(path, content);
    });

    const blob = await zip.generateAsync({ 
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 6
      }
    });
    
    saveAs(blob, filename);
    return true;
  } catch (error) {
    console.error('Error creating ZIP:', error);
    throw new Error('Failed to create ZIP file');
  }
}

export async function generateSiteZip(formData, files) {
  const slug = formData.businessName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  await createZipFromFiles(files, `${slug}-microsite.zip`);
}
