/* ==========================================================================
   LIGHTBOX — klikk et bilde for å forstørre det til fullskjerm.
   Klikk hvor som helst (eller trykk Esc) for å lukke igjen.

   Bruk: legg klassen "lightbox-img" på ethvert <img> du vil at skal
   kunne klikkes opp i fullskjerm, f.eks.:
     <img class="lightbox-img" src="bilder/snitt.jpg" alt="Snitt A-A">
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close">Lukk ✕</span><img alt="">';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector('img');

  function openLightbox(src, alt) {
    overlayImg.setAttribute('src', src);
    overlayImg.setAttribute('alt', alt || '');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.lightbox-img').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.getAttribute('src'), img.getAttribute('alt'));
    });
  });

  overlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
