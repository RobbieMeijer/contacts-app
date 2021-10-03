import render from '../../functions/render';
import theData from '../../api/exportContactsData';
import fetchData from '../../functions/fetchData';
import arrowRight from '../../assets/arrow-right.svg';
import './index.scss';
import { Contact } from '../../types';

const List = () => {
  // local state
  let state = {
    data: [{}],
  };

  // get the contact data
  fetchData(theData);

  // when data is available render the list
  if (theData !== null) {
    // save the data to local storage
    state.data = theData;

    // render contacts into dom
    state.data.map((contact: Contact, index: number) => {
      // destructure properties from contact
      const { name, img } = contact;

      render(
        `<section class="list" id="${index}">
            <ul class="list-style-none p-0">
              <li class="list-item flex flex-align-center p-1">
                <img class="thumb rhombus" src="${img}" alt="portrait of person" />
                <div class="px-1">
                  <p class="">${name}</p>
                </div>
                <div class="px-1"><img class="arrow-right" src="${arrowRight}" alt="arrow" /></div>
              </li>
            </ul>
          </section>`
      );
    });
  }
};

export default List;
