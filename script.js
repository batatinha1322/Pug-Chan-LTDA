// =================================================
// SCROLL SUAVE PARA A SEÇÃO DE JOGOS
// =================================================
document.getElementById('see-games')?.addEventListener('click', () => {
  const el = document.getElementById('games');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});



// =================================================
// GALERIA INTERATIVA COM ANIMAÇÕES ESTA BEM TOP
// =================================================
document.querySelectorAll('.game-card').forEach(card => {

  const mainWrapper = card.querySelector('[data-gallery-main]');
  const mainImage = mainWrapper?.querySelector('img');
  const thumbs = card.querySelectorAll('[data-gallery-thumbs] img');

  if (!mainImage || thumbs.length === 0) return;

  // Marca a primeira como ativa
  thumbs[0].classList.add('active-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {

      // Efeito amarelo ao clicar
      mainWrapper.classList.add('flash-yellow');
      setTimeout(() => mainWrapper.classList.remove('flash-yellow'), 250);

      // Animação suave
      mainImage.classList.add('fade-out');

      setTimeout(() => {
        // Troca de imagem
        const temp = mainImage.src;
        mainImage.src = thumb.src;
        thumb.src = temp;

        mainImage.classList.remove('fade-out');
        mainImage.classList.add('fade-in');

        setTimeout(() => mainImage.classList.remove('fade-in'), 250);
      }, 200);

      // Atualiza destaque nas miniaturas
      thumbs.forEach(t => t.classList.remove('active-thumb'));
      thumb.classList.add('active-thumb');

    });
  });

});

// =================================================
// EXPANDIR / RECOLHER DESCRIÇÃO
// =================================================

document.querySelectorAll(".dev-desc").forEach(desc => {
    desc.addEventListener("click", () => {
        desc.classList.toggle("expanded");
    });
});
