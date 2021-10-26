let STATE = {
  contactList: {
    currentPage: 1,
    rows: 5,
    totalPages: 0,
    filter: 'filter-by-all',
  },
  fetchData: {
    loading: true,
    error: '',
    data: [{ id: '', name: '', address: '', info: '', img: '' }],
  },
};

export default STATE;
