import STATE from '../state';
import render from './render';

const fetchData = (theData: any) => {
  // global STATE
  let { loading, error, data } = STATE.fetchData;

  // get promise data back
  const getData = async () => {
    try {
      const response = await fetch(theData);

      if (response.ok) {
        data = theData; // save data to global state
        loading = false; // save loading to global state
        error = ''; // save error to global state
      }
    } catch (error) {
      // save new error message to global state
      error = `${error}`;

      // when there is an error, render it into main list
      render(
        document.getElementById('list'),
        `<div class="status">${error}</div>`
      );
    }
  };
  // invoke callback getting the data
  getData();

  // return the local state values
  return { loading, data };
};

export default fetchData;
