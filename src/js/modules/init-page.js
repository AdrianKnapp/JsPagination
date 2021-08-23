import { urlToFetch, fetchPage } from './fetch-page.js';
import getUrlParameters from './get-url-parameters.js';

export default function initPage() {
  const currentURL = new URL(window.location.href);
  if (getUrlParameters(currentURL, 'p')) {
    fetchPage(`${urlToFetch}?${currentURL.searchParams.toString()}`);
  } else {
    fetchPage(urlToFetch);
  }
}
