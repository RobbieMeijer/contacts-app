const ListItem = () => {
  const renderHTML = `
    <div class="List-item">List Item</div>
  `;

  document.body.insertAdjacentHTML('beforeend', renderHTML);
};

export default ListItem;
