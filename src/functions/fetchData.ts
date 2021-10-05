const fetchData = (theData: any) => {
  // setup local state object
  let state = {
    loading: true,
    error: '',
    data: {},
  };

  // destructure local state
  const { loading, error, data } = state;

  // get promise data back
  const getData = async () => {
    try {
      const response = await fetch(theData);
      if (response.ok) {
        state.data = theData; // save data to local state
        console.log('state.data from fetchData: ', state.data);
        state.loading = false; // save loading to local state
        state.error = ''; // save error to local state
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
