const animate = (domNodes: string) => {
  document.querySelectorAll(domNodes).forEach((item: HTMLElement) => {
    setTimeout(() => {
      item.classList.add('animate');
    }, 100);
  });
};

export default animate;
