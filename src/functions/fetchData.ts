import { Contact } from './../types/index';
import STATE from '../state';
import render from './render';

const fetchData = (theData: any) => {
  // local state
  const state = {
    loading: STATE.fetchData.loading,
    data: STATE.fetchData.data,
  };
  const { loading, data } = state;

  // get promise data back
  const getData = async () => {
    try {
      const response = await fetch(theData);

      if (response.ok) {
        STATE.fetchData.data = theData; // save data to global state
        STATE.fetchData.loading = false; // save loading to global state
        STATE.fetchData.error = ''; // save error to global state
      }
    } catch (error) {
      // save new error message to global state
      STATE.fetchData.error = `${error}`;

      // when there is an error, render it into main list
      render(
        document.getElementById('list'),
        `<div class="status">${STATE.fetchData.error}</div>`
      );
    }
  };
  // invoke callback getting the data
  getData();

  // return the local state values
  return { loading, data };
};

export default fetchData;
