const animate = (domNodes: string, buttonClassClicked: string | null) => {
  if (domNodes !== null) {
    document.querySelectorAll(domNodes).forEach((item: HTMLElement) => {
      // 1. depending on which Nav button is clicked add css class
      // for next or previous animation
      if (buttonClassClicked) {
        item.classList.add(buttonClassClicked);
      } // if not, the domNodes will just fade in (without slide in)

      // 2. add above selected dom nodes to be animated
      // (add .animate css class)
      setTimeout(() => {
        item.classList.add('animate');
      }, 100);
    });
  }
};

export default animate;
