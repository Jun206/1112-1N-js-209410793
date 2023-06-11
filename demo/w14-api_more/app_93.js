const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=34145937';


try {
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data.players);
  displayItems(data.players);
} catch (error) {
	console.error(error);
}
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strPlayer } = item;
      return `<p>${strPlayer}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
