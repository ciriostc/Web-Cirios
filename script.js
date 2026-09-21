// script.js

// --- Filtro de la galería ---
// Cada botón .filter-btn tiene un atributo data-filter ("todos", "bautizo", "virgen", "otras"...).
// Cada figura .gallery-item tiene un atributo data-tags con una o varias etiquetas separadas por espacio.
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const emptyMessage = document.querySelector('.gallery-empty');

  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Marcar visualmente el botón activo
      filterButtons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');

      let visibleCount = 0;

      galleryItems.forEach((item) => {
        const tags = (item.dataset.tags || '').split(' ');
        const matches = filter === 'todos' || tags.includes(filter);
        item.classList.toggle('is-hidden', !matches);
        if (matches) visibleCount++;
      });

      if (emptyMessage) {
        emptyMessage.hidden = visibleCount !== 0;
      }
    });
  });
});
