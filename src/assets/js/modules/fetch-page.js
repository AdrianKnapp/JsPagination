import replaceContent from './change-html.js';
import changeButtonsHREF from './btn-change-state.js';

export const urlToFetch = './src/api/api-home.php';

export async function fetchPage(url) {
  const pageLoader = document.querySelector('.page-loader');
  const errorMessage = document.querySelector('.error-message');

  pageLoader.style.display = 'flex';
  pageLoader.style.opacity = 1;

  try {
    const pageResponse = await fetch(url);
    const responseObject = await pageResponse.json();
    const { maxPages } = responseObject;
    replaceContent(responseObject);
    if (!responseObject.error) {
      errorMessage.style.display = 'none';
      changeButtonsHREF(maxPages);
    } else {
      errorMessage.innerHTML = 'Não há dados.';
      errorMessage.style.display = 'flex';
    }
  } catch (err) {
    console.log(err);
  } finally {
    const pageLoaderTransitionTime = getComputedStyle(pageLoader).transitionDuration.replace('s', '') * 1000;
    pageLoader.style.opacity = 0;
    setTimeout(() => {
      pageLoader.style.display = 'none';
    }, pageLoaderTransitionTime);
  }
}
