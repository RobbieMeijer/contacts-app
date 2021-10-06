import './index.scss';
import render from '../../functions/render';

const Modal = (info: string, domNode: HTMLElement) => {
  const modal = document.getElementById('modal');

  // check if modal exists, if so remove first
  closeModal();

  // activate modal
  animateModal();

  function closeModal() {
    if (modal) {
      modal.remove();
    }
  }

  // setup animation function to modal
  function animateModal() {
    setTimeout(() => {
      document.getElementById('modal').classList.add('active');
    }, 100);
  }

  render(
    domNode,
    `<div id="modal" class="p-1 b-radius-8">
      <button id="close-modal" class=""> x </button>
      <p>${info}</p>
    </div>`
  );

  // add event listener to invoke animation function
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active');
  });
};

export default Modal;
