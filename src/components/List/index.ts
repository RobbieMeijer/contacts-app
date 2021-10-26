import './index.scss';
import render from '../../functions/render';
import theData from '../../api/exportContactsData';
import fetchData from '../../functions/fetchData';
import STATE from '../../state';
import ListItem from '../ListItem';

const List = () => {
  // get the contact data
  fetchData(theData);

  // when data is available render the list
  if (theData !== null) {
    STATE.fetchData.data = theData; // save the data to global state
    renderSection(); // render the parent html for list

    // render list items into main list
    ListItem(
      STATE.fetchData.data,
      STATE.contactList.rows,
      STATE.contactList.currentPage,
      document.getElementById('list')
    );
  }

  function renderSection() {
    render(
      document.body,
      `<main id="list">
        ${
          STATE.fetchData.loading
            ? '<div class="status">...loading</div>'
            : null
        }
      </main>`
    );
  }
};

export default List;
