export function replaceVariables(template, variables) {
  let result = template;
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`\\[${key}\\]`, 'g');
    result = result.replace(regex, value || '');
  });
  return result;
}

export function generateServicesHTML(services) {
  return services
    .filter(s => s.name.trim())
    .map(service => `
      <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div class="text-4xl mb-4">${service.icon}</div>
        <h3 class="text-xl font-bold mb-2">${service.name}</h3>
        ${service.price ? `<p class="text-blue-600 font-semibold mb-3">${service.price}</p>` : ''}
        <p class="text-gray-600">${service.description}</p>
      </div>
    `).join('\n');
}

export function generateScheduleHTML(schedule) {
  return schedule
    .filter(sch => sch.day.trim())
    .map(sch => `
      <div class="flex justify-between">
        <span class="font-medium">${sch.day}</span>
        <span class="text-gray-600">${sch.open} - ${sch.close}</span>
      </div>
    `).join('\n');
}

export function generateGalleryHTML(images) {
  if (!images || images.length === 0) {return '';}
  return images.map((img, i) => `
    <div class="gallery-item">
      <img src="${img}" alt="Galería ${i + 1}" loading="lazy" />
    </div>
  `).join('\n');
}
