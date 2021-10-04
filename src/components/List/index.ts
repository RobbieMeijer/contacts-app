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
  const { data, currentPage, rows } = state;

  // get the contact data
  fetchData(theData);
  // when data is available render the list
  if (theData !== null) {
    state.data = theData; // save the data to local storage
    renderList(data, rows, currentPage);
  }

  // store contact details to global STATE
  function storeContactDetails(contact: Contact) {
    const saveContact = STATE.contactDetails;
    const { name, address, info, img } = contact;

    saveContact.name = name;
    saveContact.address = address;
    saveContact.info = info;
    saveContact.img = img;

    console.log('saveContact: ', saveContact);
  }

  // create modal
  function createModal() {
    render(
      document.body,
      `<section class="modal" style="width:100vw; height:100vh; margin: 0 auto;">
        <div class="img">
          <img class="thumb-big" src="${img}" alt="portrait of person" />
        </div>
        <div class="name">
          <h3 class="">${name}</h3> 
        </div>
        <div class="address">
          <p>${address}</p>
        </div>
        <div class="info">
          <p>${info}</p>
        </div>
      </section>`
    );
  }

  // render modal
  function renderModal(contact: Contact) {
    // 1. store contact details to global STATE
    storeContactDetails(contact);

    // 2. create modal and show in view
    createModal();
  }

  function renderList(data: [], rowsPerPage: any, currentPage: any) {
    // 1. render parent html first
    renderSection();

    // 2. render contacts into parent html
    state.data.map((contact: Contact, index: number) => {
      // destructure properties from contact
      const { name, img } = contact;
      render(
        document.querySelector('.list'),
        `<div onclick="${function selectContact() {
          renderModal(contact);
          console.log('hallo ');
        }}" class="list-item p-0 flex flex-align-center p-1 pointer" id="${index}">
            <img class="thumb rhombus" src="${img}" alt="portrait of person" />
            <div class="px-1">
              <p class="">${name}</p>
            </div>
            <div class="px-1"><img class="arrow-right" src="${arrowRight}" alt="arrow" /></div>
          </div>`
      );
    });
  }

  function renderSection() {
    render(
      document.body,
      `<section class="list">
      </section>`
    );
  }
};

export default List;
