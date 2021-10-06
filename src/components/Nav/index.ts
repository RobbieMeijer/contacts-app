import render from '../../functions/render';
import STATE from '../../state';
import ListItem from '../ListItem';

const Nav = () => {
  // global STATE
  let { data, currentPage, rows, totalPages } = STATE.contactList;

  function renderListAndCurrentPage() {
    ListItem(data, rows, currentPage, document.getElementById('list'));
    renderCurrentPage(document.querySelector('.current-page'));
  }

  function getPreviousPage() {
    // preventing navigating to 0 or less than 0
    if (currentPage !== 1) {
      currentPage--;
      renderListAndCurrentPage();
    }
  }

  function renderCurrentPage(domNode: HTMLElement) {
    // 1. empty current-page dom (reset)
    domNode.innerHTML = '';

    // 2. add new current page value
    render(domNode, `${currentPage}`);
  }

  function renderTotalPages(domNode: HTMLElement) {
    if (data.length > 0) {
      const totalContacts = data.length;
      const pagesTotal = Math.ceil(totalContacts / rows); // round number up to next largest integer if its not an even number
      totalPages = pagesTotal;

      render(domNode, `${totalPages}`);
    }
  }

  function getNextPage() {
    if (currentPage !== totalPages) {
      currentPage++; // change to next page
      renderListAndCurrentPage();
    }
  }

  render(
    document.body,
    `<nav id="page-navigation" class="flex flex-align-center">
      <button class="previous"> < </button>
      <p class="current-page">${currentPage}<p>&nbsp;/&nbsp;<p class="total-pages"></p>
      <button class="next"> > </button>
    </nav>`
  );

  // adding click events and totalpages to navigation, after the dom render,
  // otherwise they would point to non existing dom nodes
  renderTotalPages(document.querySelector('.total-pages'));
  document
    .querySelector('.previous')
    .addEventListener('click', getPreviousPage);
  document.querySelector('.next').addEventListener('click', getNextPage);
};

export default Nav;
