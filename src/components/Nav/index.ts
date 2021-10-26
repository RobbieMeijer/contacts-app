import './index.scss';
import render from '../../functions/render';
import STATE from '../../state';
import ListItem from '../ListItem';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import animate from '../../functions/animate';

const Nav = () => {
  function renderListAndCurrentPage(navClicked: string) {
    ListItem(
      STATE.fetchData.data,
      STATE.contactList.rows,
      STATE.contactList.currentPage,
      document.getElementById('list')
    );
    renderCurrentPage(document.querySelector('.current-page'), navClicked);
  }

  function getPreviousPage() {
    // preventing navigating to 0 or less than 0
    if (STATE.contactList.currentPage !== 1) {
      STATE.contactList.currentPage--;
      renderListAndCurrentPage('prev');
    }
  }

  function renderCurrentPage(domNode: HTMLElement, navClicked: string) {
    // 1. empty current-page dom (reset)
    domNode.innerHTML = '';

    // 2. add new current page value
    render(domNode, `${STATE.contactList.currentPage}`);

    // 3. animate list items
    animate('.list-item .container', navClicked);
  }

  function renderTotalPages(domNode: HTMLElement) {
    if (STATE.fetchData.data.length > 0) {
      const totalContacts = STATE.fetchData.data.length;
      const pagesTotal = Math.ceil(totalContacts / STATE.contactList.rows); // round number up to next largest integer if its not an even number
      STATE.contactList.totalPages = pagesTotal;

      render(domNode, `${STATE.contactList.totalPages}`);
    }
  }

  function getNextPage() {
    if (STATE.contactList.currentPage !== STATE.contactList.totalPages) {
      STATE.contactList.currentPage++; // change to next page
      renderListAndCurrentPage('next');
    }
  }

  render(
    document.body,
    `<section id="page-navigation" class="p-1">
      <nav class="flex flex-align-center">
        <button class="previous flex text-uppercase"><img class="arrow" src="${arrowLeft}" alt="arrow left" /> prev</button>
        <p class="current-page">${STATE.contactList.currentPage}<p>&nbsp;/&nbsp;<p class="total-pages"></p>
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
