let searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	loadBySearch();
	clearInput();
});

// Fetches API data using the value of the input entered by the user
async function loadBySearch() {
	let inputValue = document.querySelector('.search-input').value;
	let response = await fetch(
		`https://pixabay.com/api/?key=21484393-fe2bda1207e80c999410f0783&q=${inputValue}&image_type=photo&per_page=200`
	);
	let data = await response.json();
	createImages(data.hits);
}

// Renders the images dynamically from the data received
function createImages(images) {
	document.querySelector('.images').innerHTML = `
    ${images.map((image) => {
		return `<img class="image" src="${image.webformatURL}" alt="${image.tags}" />`;
	})}
    `;
}

// Clears the input
function clearInput() {
	let input = document.querySelector('.search-input');
	input.value = '';
}
