const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      speed: 300, // rápida transição
      allowTouchMove: true,
    });

    const progressContainer = document.getElementById('progress-container');
    const numSlides = document.querySelectorAll('.swiper-slide').length;

    // Criar as barras
    for (let i = 0; i < numSlides; i++) {
      const bar = document.createElement('div');
      bar.classList.add('progress-bar');
      if (i === 0) bar.classList.add('active');
      progressContainer.appendChild(bar);
    }

    // Atualizar barra ativa
    swiper.on('slideChange', () => {
      const bars = document.querySelectorAll('.progress-bar');
      bars.forEach((bar, index) => {
        bar.classList.toggle('active', index === swiper.activeIndex);
      });
    });


    
//acessibilidade
//aplica invisilidade para o leitor de tela, ao conteudo duplicado mobile/desktop
function atualizarAcessibilidade() {
  const mobiles = document.querySelectorAll('.mobile');
  const desktops = document.querySelectorAll('.desktop');

  const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  mobiles.forEach(el =>
    el.setAttribute("aria-hidden", isDesktop ? "true" : "false")
  );

  desktops.forEach(el =>
    el.setAttribute("aria-hidden", isDesktop ? "false" : "true")
  );
}

atualizarAcessibilidade();
window.addEventListener("resize", atualizarAcessibilidade);
//acessibilidade