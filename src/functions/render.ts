// render html to the view
const render = (html: string) => {
  document.body.insertAdjacentHTML('beforeend', html);
};

export default render;
