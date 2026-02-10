let theBar = document.getElementById('bar');
let theNav = document.querySelector('nav ul');
let theCloseIcon = document.getElementById('close');
let upBtn = document.getElementById('to-up-btn');

if (theBar) {
  theBar.addEventListener('click', () => {
    theNav.classList.add('active');
  });
}

document.addEventListener('click', (e) => {
  if (e.target !== theBar && e.target !== theNav) {
    theNav.classList.remove('active');
  }
});

if (theCloseIcon) {
  theCloseIcon.addEventListener('click', () => {
    theNav.classList.remove('active');
  });
}

document.onscroll = () => {
  if (upBtn) {
    if (scrollY >= 1827) {
      upBtn.style.display = 'initial';
    } else {
      upBtn.style.display = 'none';
    }
  }
};
