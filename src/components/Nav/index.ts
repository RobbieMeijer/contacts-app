import './index.scss';
import render from '../../functions/render';
import STATE from '../../state';
import ListItem from '../ListItem';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import animate from '../../functions/animate';

const Nav = () => {
  // global STATE
  let { data, currentPage, rows, totalPages } = STATE.contactList;

  function renderListAndCurrentPage(navClicked: string) {
    ListItem(data, rows, currentPage, document.getElementById('list'));
    renderCurrentPage(document.querySelector('.current-page'), navClicked);
  }

  function getPreviousPage() {
    // preventing navigating to 0 or less than 0
    if (currentPage !== 1) {
      currentPage--;
      renderListAndCurrentPage('prev');
    }
  }

  function renderCurrentPage(domNode: HTMLElement, navClicked: string) {
    // 1. empty current-page dom (reset)
    domNode.innerHTML = '';

    // 2. add new current page value
    render(domNode, `${currentPage}`);

    // 3. animate list items
    animate('.list-item .container', navClicked);
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
      renderListAndCurrentPage('next');
    }
  }

  render(
    document.body,
    `<section id="page-navigation" class="p-1">
      <nav class="flex flex-align-center">
        <button class="previous flex text-uppercase"><img class="arrow" src="${arrowLeft}" alt="arrow left" /> prev</button>
        <p class="current-page">${currentPage}<p>&nbsp;/&nbsp;<p class="total-pages"></p>
        <button class="next flex text-uppercase">next <img class="arrow" src="${arrowRight}" alt="arrow right" /></button>
      </nav>
    </section>`
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
