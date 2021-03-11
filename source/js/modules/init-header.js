const initHeader = () => {
  const header = document.querySelector('.header');
  const breakpointLg = window.matchMedia('(min-width: 1024px)');

  if (!header) return;

  const burgerBtn = header.querySelector('.main-nav__toggle');
  const navBlock = header.querySelector('.main-nav__wrapper');
  const openMenu = () => {
    burgerBtn.ariaPressed = 'true';
    navBlock.classList.add('active');
    header.classList.add('open');
    window.disableBodyScroll(navBlock);
  };

  const closeMenu = () => {
    burgerBtn.ariaPressed = 'false';
    navBlock.classList.remove('active');
    header.classList.remove('open');
    window.enableBodyScroll(navBlock);
  };

  const closeMenuOnResize = () => {
    closeMenu();
  };

  const initBurgerAction = () => {
    if (burgerBtn) {
      breakpointLg.addListener(closeMenuOnResize);
      burgerBtn.addEventListener('click', () => {
        if (burgerBtn.ariaPressed === 'true') {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }
  };

  initBurgerAction();
};

export {
  initHeader
};
