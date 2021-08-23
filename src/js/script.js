import buttonClick from './modules/btn-click.js';
import initPage from './modules/init-page.js';

const links = document.querySelectorAll('a');

window.addEventListener('popstate', () => {
  initPage();
});

links.forEach((link) => {
  link.addEventListener('click', buttonClick);
});

initPage();
