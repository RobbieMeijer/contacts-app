import './index.scss';
import render from '../../functions/render';
import STATE from '../../state';
import ListItem from '../ListItem';

const Filter = () => {
  // global STATE
  let { currentPage, rows } = STATE.contactList;

  function renderListItem() {
    ListItem(
      STATE.contactList.data,
      rows,
      currentPage,
      document.getElementById('list')
    );
  }

  function filterBy(e: any) {
    if (e.target.id === 'filter-by-name') {
      STATE.contactList.filter = 'filter-by-name';
      renderListItem();
    }

    if (e.target.id === 'filter-by-address') {
      STATE.contactList.filter = 'filter-by-address';
      renderListItem();
    }
    if (e.target.id === 'filter-by-all') {
      STATE.contactList.filter = 'filter-by-all';
      renderListItem();
    }
  }

  render(
    document.body,
    `<section id="filter" class="p-1 text-center">
      <button id="filter-by-all" class="filter-btn btn">All</button>
      <button id="filter-by-name" class="filter-btn btn">Name</button>
      <button id="filter-by-address" class="filter-btn btn">Address</button>
    </section>`
  );

  // add filter event listener to all filter buttons
  document.querySelectorAll('.filter-btn').forEach((item: HTMLElement) => {
    item.addEventListener('click', (e) => {
      filterBy(e);
    });
  });
};

export default Filter;
