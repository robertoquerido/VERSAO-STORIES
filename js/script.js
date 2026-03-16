



//trasicao header
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
//trasicao header

//trasicao logoRevista
  const logoRevista = document.getElementById("logoRevista");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      logoRevista.classList.add("scrolled");
    } else {
      logoRevista.classList.remove("scrolled");
    }
  });
//trasicao logoRevista


//acessibilidade
function atualizarAcessibilidade() {
  const mobile = document.querySelector('.mobile');
  const desktop = document.querySelector('.desktop');

  const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (isDesktop) {
    mobile.setAttribute("aria-hidden", "true");
    desktop.setAttribute("aria-hidden", "false");
  } else {
    mobile.setAttribute("aria-hidden", "false");
    desktop.setAttribute("aria-hidden", "true");
  }
}

atualizarAcessibilidade();
window.addEventListener("resize", atualizarAcessibilidade);
//acessibilidade