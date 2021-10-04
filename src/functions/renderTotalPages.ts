import STATE from '../state';
import render from './render';

function renderTotalPages() {
  let { data, rows, totalPages } = STATE.contactList;

  const totalContacts = data.length;
  const pagesTotal = Math.ceil(totalContacts / rows); // round number up to next largest integer if its not an even number
  totalPages = pagesTotal;

  render(document.querySelector('.total-pages'), `${totalPages}`);
}

export default renderTotalPages;
