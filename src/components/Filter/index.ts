import './index.scss';
import render from '../../functions/render';
import STATE from '../../state';
import ListItem from '../ListItem';

const Filter = () => {
  // global STATE
  let { currentPage, rows, filter } = STATE.contactList;

  function filterBy(filterIdName: string) {
    STATE.contactList.filter = filterIdName;

    ListItem(
      STATE.contactList.data,
      rows,
      currentPage,
      document.getElementById('list')
    );
  }

  render(
    document.body,
    `<section id="filter" class="p-1 text-center">
      <button id="filter-by-all" class="filter-btn btn text-uppercase">All</button>
      <button id="filter-by-name" class="filter-btn btn text-uppercase">Name</button>
      <button id="filter-by-address" class="filter-btn btn text-uppercase">Address</button>
    </section>`
  );

  // add filter event listener to all filter buttons
  document.querySelectorAll('.filter-btn').forEach((item: HTMLElement) => {
    item.addEventListener('click', (e) => {
      const filterIdName = (<HTMLElement>e.target).id;
      filterBy(filterIdName);
    });
  });
};

export default Filter;
