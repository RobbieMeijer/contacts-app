import render from '../../functions/render';

const Header = () => {
  render(
    document.body,
    `<header id="header" class="text-center p-1">
      <h1 class="font-w-bold">Contacts</h1>
    </header>`
  );
};

export default Header;
