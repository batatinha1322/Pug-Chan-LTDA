// ======== SCROLL SUAVE PARA OS JOGOS ========
document.getElementById('see-games')?.addEventListener('click', function () {
  const el = document.getElementById('games');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// ======== GALERIA INTERATIVA ========
document.querySelectorAll('.game-card').forEach(card => {

  const mainImage = card.querySelector('[data-gallery-main] img');
  const thumbs = card.querySelectorAll('[data-gallery-thumbs] img');

  if (!mainImage || thumbs.length === 0) return;

  // marca a primeira como ativa
  thumbs[0].classList.add('active-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {

      const temp = mainImage.src;
      mainImage.src = thumb.src;
      thumb.src = temp;

      thumbs.forEach(t => t.classList.remove('active-thumb'));
      thumb.classList.add('active-thumb');
    });
  });

});
