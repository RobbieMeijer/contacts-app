const fetchData = (theData: any) => {
  // setup local state object
  let state = {
    loading: true,
    error: '',
    data: null || '',
  };
  // destructure local state
  const { loading, error, data } = state;

  // get promise data back
  const getData = async () => {
    try {
      const response = await fetch(theData);
      if (response.ok) {
        // save data to local state
        state.data = theData;

        // save loading to local state
        state.loading = false;

        // save error to local state
        state.error = '';
      }
    } catch (error) {
      // save new error message to local state
      state.error = `${error}`;
    }
  };
  // invoke callback getting the data
  getData();

  // return the local state values
  return { loading, error, data };
};

export default fetchData;
