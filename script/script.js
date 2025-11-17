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