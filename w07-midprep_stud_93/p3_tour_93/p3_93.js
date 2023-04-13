import { tours } from './data.js';

let tours_93 = [];

const displayTours_93 = ({ tours }) => {
  let displayTours_93 = tours.map((item) => {
    return `
  <article className='single-tour'>
    <img src=${item.image} alt=${item.name} />
    <footer>
      <div className='tour-info'>
        <h4>${item.name}</h4>
        <h4 class='tour-price'>${item.price}</h4>
      </div>
      <p>${item.info}</p>
      <button>read more</button>
    </footer>
  </article>
  `;
  });
};

const fetchTours_93 = async () => {};

window.addEventListener('DOMContentLoaded', () => {
  fetchTours_93(url);
});
