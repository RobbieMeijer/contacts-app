// render html to the view
const render = (domNode: any, html: string) => {
  if (domNode !== null) {
    domNode.insertAdjacentHTML('beforeend', html); // add html into selected dom node
  }
};

export default render;
