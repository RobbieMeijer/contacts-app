import render from '../../functions/render';
import STATE from '../../state';
import renderList from '../../functions/renderList';
import renderTotalPages from '../../functions/renderTotalPages';

const Nav = () => {
  // global STATE
  let { data, currentPage, rows, totalPages } = STATE.contactList;

  function renderListAndCurrentPage() {
    renderList(data, rows, currentPage);
    renderCurrentPage();
  }

  function getPreviousPage() {
    // preventing navigating to 0 or less than 0
    if (currentPage !== 1) {
      currentPage--;
      renderListAndCurrentPage();
    }
  }

  function renderCurrentPage() {
    // 1. empty current-page dom (reset)
    document.querySelector('.current-page').innerHTML = '';

    // 2. add new current page value
    render(document.querySelector('.current-page'), `${currentPage}`);
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

  // adding click events to navigation
  document
    .querySelector('.previous')
    .addEventListener('click', getPreviousPage);
  document.querySelector('.next').addEventListener('click', getNextPage);
  // renderTotalPages(); // render totalpages and save to local state
};

export default Nav;
