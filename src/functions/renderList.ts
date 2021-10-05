import render from './render';
import arrowRight from '../assets/arrow-right.svg';
import { Contact } from '../types';

function renderList(
  data: Contact[],
  rowsPerPage: number,
  currentPage: number,
  domNode: HTMLElement
) {
  // 1. empty list section, preventing stacking results on top of each other
  domNode.innerHTML = '';

  // 2. get first five contacts (based on state.rows)
  currentPage--; // first/current page decrement to zero based index
  let start = rowsPerPage * currentPage; // loop start
  let end = start + rowsPerPage; // loop end
  let paginatedItems = data.slice(start, end); // selection of 5 contacts from array

  // 3. loop through these contacts and render into list
  paginatedItems.map((paginatedItem: Contact, index: number) => {
    const { name, address, img } = paginatedItem;

    render(
      domNode,
      `<div class="list-item p-0 flex flex-align-center p-1 pointer" id="${index}">
        <img class="thumb rhombus" src="${img}" alt="portrait of person" />
        <div class="px-1">
          <p class="">${name}</p>
          <address>${address}</address>
        </div>
        <div class="px-1"><img class="arrow-right" src="${arrowRight}" alt="arrow" /></div>
     </div>`
    );
  });
}

export default renderList;
