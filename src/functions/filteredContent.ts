const filteredContent = (filter: string, name: string, address: string) => {
  let state = {
    content: '',
  };

  // check filter has changed, if so render content by filter
  switch (filter) {
    case 'filter-by-name':
      state.content = `<p>${name}</p>`;
      break;
    case 'filter-by-address':
      state.content = `<address>${address}</address>`;
      break;
    default:
      state.content = `<p>${name}</p><address>${address}</address>`;
  }

  return state.content;
};

export default filteredContent;
