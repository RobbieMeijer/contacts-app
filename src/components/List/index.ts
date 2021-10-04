import render from '../../functions/render';
import theData from '../../api/exportContactsData';
import fetchData from '../../functions/fetchData';
import arrowRight from '../../assets/arrow-right.svg';
import './index.scss';
import { Contact } from '../../types';
import STATE from '../../state';

const List = () => {
  // global STATE
  const { name, address, info, img } = STATE.contactDetails;

  // local state
  let state: { data: any; currentPage: number; rows: number } = {
    data: [],
    currentPage: 1,
    rows: 5,
  };

  // get the contact data
  fetchData(theData);
  // when data is available render the list
  if (theData !== null) {
    state.data = theData; // save the data to local storage
    renderSection(); // render the parent html for list
    renderList(state.data, state.rows, state.currentPage);
  }

  function renderList(data: [], rowsPerPage: number, currentPage: number) {
    console.log('state.data from renderList: ', state.data);

    // 1. empty list section, preventing stacking results on top of each other
    document.getElementById('list').innerHTML = '';

    // 2. get first five contacts (based on state.rows)
    currentPage--; // first/current page decrement to zero based index
    let start = rowsPerPage * currentPage; // loop start
    let end = start + rowsPerPage; // loop end
    let paginatedItems = data.slice(start, end); // selection of 5 contacts from array
    console.log('paginatedItems: ', paginatedItems);

    // 3. loop through these contacts and render into list
    paginatedItems.map((paginatedItem: Contact, index: number) => {
      const { name, address, img } = paginatedItem;

      render(
        document.getElementById('list'),
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

  function pageNavigation() {}

  function renderSection() {
    render(
      document.body,
      `<section id="list">
      </section>
      <nav id="page-navigation"></nav>`
    );
  }
};

export default List;
