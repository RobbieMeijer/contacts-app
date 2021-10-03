import render from '../../functions/render';

const Header = () => {
  let state = {
    text: 'initial state text',
  };

  render(
    `<header class="header text-center p-1">
      <h1 class="font-w-bold">Contacts</h1>
    </header>`
  );
};

export default Header;
