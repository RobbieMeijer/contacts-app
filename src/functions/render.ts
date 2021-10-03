// render html to the view
const render = (domNode: any, html: string) => {
  if (domNode !== null) {
    domNode.insertAdjacentHTML('beforeend', html);
  }
};

export default render;
