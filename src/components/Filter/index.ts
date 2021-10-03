import render from '../../functions/render';
import './index.scss';

const Filter = () => {
  let state = {};

  const logText = () => {
    console.log('All clicked');
  };

  render(
    document.body,
    `<section class="filter p-1">
      sort by: 
      <button class="btn" onclick="${() => logText()}">All</button>
      <button class="btn">Name</button>
      <button class="btn">Address</button>
    </section>`
  );
};

export default Filter;
