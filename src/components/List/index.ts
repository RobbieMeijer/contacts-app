import render from '../../functions/render';
import arrow from '../../assets/navigate_next.svg';
import './index.scss';

const List = () => {
  let state = {};

  console.log('arrow: ', arrow);

  render(
    `<section class="list">
      <ul class="list-style-none p-0">
        <li class="list-item flex flex-align-center p-1">
          <img class="thumb rhombus" src="https://randomuser.me/api/portraits/women/91.jpg" alt="portrait of woman" />
          <div class="px-1">
            <p class="">Cecelia Schneider</p>
          </div>
          <div class="px-1"><img src="${arrow}" alt="arrow" /></div>
        </li>
      </ul>
    </section>`
  );
};

export default List;
