let STATE = {
  modal: {
    id: 0.0,
    active: false,
    info: '',
  },
  contactList: {
    data: [{ id: '', name: '', address: '', info: '', img: '' }],
    currentPage: 1,
    rows: 5,
    totalPages: 0,
  },
};

export default STATE;
