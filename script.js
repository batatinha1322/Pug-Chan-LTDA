// script simples para rolar até a seção de jogos
document.getElementById('see-games')?.addEventListener('click', function () {
  const el = document.getElementById('games');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
