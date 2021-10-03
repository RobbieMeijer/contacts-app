import render from '../../functions/render';
import theData from '../../api/exportContactsData';
import fetchData from '../../functions/fetchData';
import arrowRight from '../../assets/arrow-right.svg';
import './index.scss';

const List = () => {
  // local state
  let state = {};

  // get the contact data
  fetchData(theData);
  if (theData !== null) {
    console.log('theData: ', theData);
  }

  render(
    `<section class="list">
      <ul class="list-style-none p-0">
        <li class="list-item flex flex-align-center p-1">
          <img class="thumb rhombus" src="https://randomuser.me/api/portraits/women/91.jpg" alt="portrait of woman" />
          <div class="px-1">
            <p class="">Cecelia Schneider</p>
          </div>
          <div class="px-1"><img class="arrow-right" src="${arrowRight}" alt="arrow" /></div>
        </li>
      </ul>
    </section>`
  );
};

export default List;
