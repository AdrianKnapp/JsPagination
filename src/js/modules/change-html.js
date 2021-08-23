import getUrlParameters from './get-url-parameters.js';

export default function replaceContent(responseObject) {
  const currentURL = new URL(window.location.href);

  const ul = document.querySelector('.table-box ul');
  const errorMessage = document.querySelector('.error-message');

  const spanCurrentPage = document.querySelector('[data-page-status="current"]');
  const spanMaxPage = document.querySelector('[data-page-status="max"]');

  spanCurrentPage.innerText = +getUrlParameters(currentURL, 'p') + 1;
  spanMaxPage.innerText = responseObject.maxPages + 1;

  const codeArea = document.querySelector('.code-box pre');
  if (!responseObject.error) {
    ul.innerHTML = '';
    codeArea.innerText = '';
    codeArea.innerText = JSON.stringify(responseObject, null, 2);
    responseObject.numbers.forEach((item) => {
      const li = document.createElement('li');
      const html = `
        <span>${item}</span>
      `;

      li.innerHTML = html;
      ul.appendChild(li);
    });

    ul.style.display = 'flex';
    errorMessage.style.display = 'none';
  } else {
    ul.style.display = 'none';
    errorMessage.style.display = 'flex';
    errorMessage.innerText = 'Não existem mais dados.';
  }
}
