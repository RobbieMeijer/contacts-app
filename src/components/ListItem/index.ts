import './index.scss';
import render from '../../functions/render';
import arrowRight from '../../assets/arrow-right.svg';
import renderModal from '../Modal';
import STATE from '../../state';
import animate from '../../functions/animate';
import filteredContent from '../../functions/filteredContent';
import { Contact } from '../../types';

const ListItem = (
  data: Contact[],
  rowsPerPage: number,
  currentPage: number,
  domNode: HTMLElement
) => {
  // global STATE
  const { filter } = STATE.contactList;

  // 1. empty list section, preventing stacking results on top of each other
  domNode.innerHTML = '';

  // 2. get first five contacts
  currentPage--; // first/current page decrement to zero based index
  const start = rowsPerPage * currentPage; // loop start
  const end = start + rowsPerPage; // loop end
  const paginatedItems = data.slice(start, end); // selection of 5 contacts from array

  // 3. loop through these contacts and render into list
  paginatedItems.map((paginatedItem: Contact) => {
    const { id, name, address, img, info } = paginatedItem;

    render(
      domNode,
      `<div class="list-item p-1 pointer" id="${id}" data-info="${info}">
        <div class="container flex flex-align-center">
          <img class="thumb" src="${img}" alt="portrait of person" />
          <div class="px-1">
            ${filteredContent(filter, name, address)}
          </div>
          <div class="arrow-right px-1"><img src="${arrowRight}" alt="arrow" /></div>
        </div>
      </div>`
    );
  });

  // add modal event listener to all list items
  document.querySelectorAll('.list-item').forEach((item: HTMLElement) => {
    item.addEventListener('click', () => {
      // show the modal with dataset from paginatedItem
      renderModal(item.dataset.info, document.body);
    });
  });
  // animate the list items on initial render
  animate('.list-item');
};

export default ListItem;
