import getUrlParameters from './get-url-parameters.js';

export default function changeButtonsHREF(maxPages) {
  const currentURL = new URL(window.location.href);

  if (getUrlParameters(currentURL, 'p')) {
    const pageParameter = +getUrlParameters(currentURL, 'p');
    const buttons = document.querySelectorAll('[data-page]');

    buttons.forEach((button) => {
      const linkGETs = button.href.split('?')[1].split('&');
      linkGETs.pop();

      switch (button.dataset.page) {
        case 'previous':
          if (pageParameter < 1) {
            button.classList.add('disabled');
            linkGETs.push(`p=${0}`);
          } else {
            button.classList.remove('disabled');
            linkGETs.push(`p=${pageParameter - 1}`);
          }
          break;
        case 'next':
          if (pageParameter >= maxPages) {
            button.classList.add('disabled');
            linkGETs.push(`p=${pageParameter}`);
          } else {
            button.classList.remove('disabled');
            linkGETs.push(`p=${pageParameter + 1}`);
          }
          break;
        default:
          break;
      }
      button.href = `?${linkGETs.join('&')}`;
    });
  }
}
