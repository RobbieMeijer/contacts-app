import render from './render';

const renderModal = (info: string, domNode: HTMLElement) => {
  render(
    domNode,
    `<div id="modal" class="" style="width:100vw; height:40vh; z-index: 200; position: absolute; top: 0; right: 0;">
      ${info}
    </div>`
  );
};

export default renderModal;
