import { fetchPage, urlToFetch } from './fetch-page.js';

export default function buttonClick(event) {
  event.preventDefault();
  const linkClicked = this.getAttribute('href');
  const linkToFetch = urlToFetch + linkClicked;

  if (!this.classList.contains('disabled')) {
    fetchPage(linkToFetch);
    window.history.pushState(null, null, linkClicked);
  }
}
