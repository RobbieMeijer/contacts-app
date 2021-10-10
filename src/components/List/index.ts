import render from '../../functions/render';
import theData from '../../api/exportContactsData';
import fetchData from '../../functions/fetchData';
import STATE from '../../state';
import ListItem from '../ListItem';

const List = () => {
  // global STATE
  let { currentPage, rows } = STATE.contactList;

  // get the contact data
  fetchData(theData);

  // when data is available render the list
  if (theData !== null) {
    STATE.contactList.data = theData; // save the data to local storage
    renderSection(); // render the parent html for list
    ListItem(
      STATE.contactList.data,
      rows,
      currentPage,
      document.getElementById('list')
    );
  }

  function renderSection() {
    render(
      document.body,
      `<section id="list">
      </section>`
    );
  }
};

export default List;
