import render from '../../functions/render';
import theData from '../../api/exportContactsData';
import fetchData from '../../functions/fetchData';
// import arrowRight from '../../assets/arrow-right.svg';
import './index.scss';
// import { Contact } from '../../types';
import STATE from '../../state';
import renderTotalPages from '../../functions/renderTotalPages';
import renderList from '../../functions/renderList';

const List = () => {
  // global STATE
  let { data, currentPage, rows /*totalPages*/ } = STATE.contactList;

  // local state
  // let state: {
  //   data: any;
  //   rows: number;
  //   totalPages: number;
  // } = {
  //   data: [],
  //   // currentPage: 1,
  //   rows: 5,
  //   totalPages: 0,
  // };

  // get the contact data
  fetchData(theData);
  // when data is available render the list
  if (theData !== null) {
    data = theData; // save the data to local storage
    renderSection(); // render the parent html for list
    renderList(data, rows, currentPage);
    renderTotalPages(); // render totalpages and save to local state
  }

  // function renderList(
  //   data: { name: string; address: string; info: string; img: string }[],
  //   rowsPerPage: number,
  //   currentPage: number
  // ) {
  //   // 1. empty list section, preventing stacking results on top of each other
  //   document.getElementById('list').innerHTML = '';

  //   // 2. get first five contacts (based on state.rows)
  //   currentPage--; // first/current page decrement to zero based index
  //   let start = rowsPerPage * currentPage; // loop start
  //   let end = start + rowsPerPage; // loop end
  //   let paginatedItems = data.slice(start, end); // selection of 5 contacts from array

  //   // 3. loop through these contacts and render into list
  //   paginatedItems.map((paginatedItem: Contact, index: number) => {
  //     const { name, address, img } = paginatedItem;

  //     render(
  //       document.getElementById('list'),
  //       `<div class="list-item p-0 flex flex-align-center p-1 pointer" id="${index}">
  //         <img class="thumb rhombus" src="${img}" alt="portrait of person" />
  //         <div class="px-1">
  //           <p class="">${name}</p>
  //           <address>${address}</address>
  //         </div>
  //         <div class="px-1"><img class="arrow-right" src="${arrowRight}" alt="arrow" /></div>
  //      </div>`
  //     );
  //   });
  // }

  // function renderListAndCurrentPage() {
  //   renderList(state.data, state.rows, STATE.contactList.currentPage);
  //   renderCurrentPage();
  // }

  // function getPreviousPage() {
  //   // preventing navigating to 0 or less than 0
  //   if (STATE.contactList.currentPage !== 1) {
  //     STATE.contactList.currentPage--;
  //     renderListAndCurrentPage();
  //   }
  // }

  // function renderCurrentPage() {
  //   // 1. empty current-page dom (reset)
  //   document.querySelector('.current-page').innerHTML = '';

  //   // 2. add new current page value
  //   render(
  //     document.querySelector('.current-page'),
  //     `${STATE.contactList.currentPage}`
  //   );
  // }

  // function renderTotalPages() {
  //   const totalContacts = state.data.length;
  //   const totalPages = Math.ceil(totalContacts / state.rows); // round number up to next largest integer if its not an even number
  //   state.totalPages = totalPages;

  //   render(document.querySelector('.total-pages'), `${state.totalPages}`);
  // }

  // function getNextPage() {
  //   if (STATE.contactList.currentPage !== state.totalPages) {
  //     STATE.contactList.currentPage++; // change to next page
  //     renderListAndCurrentPage();
  //   }
  // }

  function renderSection() {
    render(
      document.body,
      `<section id="list" class="">
      </section>`
    );

    // // adding click events to navigation
    // document
    //   .querySelector('.previous')
    //   .addEventListener('click', getPreviousPage);
    // document.querySelector('.next').addEventListener('click', getNextPage);
  }
};

export default List;
