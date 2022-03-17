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
		`https://pixabay.com/api/?key=21484393-fe2bda1207e80c999410f0783&q=${inputValue}&image_type=photo&orientation=horizontal&per_page=200`
	);
	let data = await response.json();
	createImages(data.hits);
}

// Renders the images dynamically from the data received
function createImages(images) {
	document.querySelector('.images').innerHTML = `
    ${images
		.map((image) => {
			return `<img class="image" src="${image.webformatURL}" alt="${image.tags}" />`;
		})
		.join('')}
    `;
}

// Clears the input
function clearInput() {
	let input = document.querySelector('.search-input');
	input.value = '';
}

// Shows scroll-to-top button
window.addEventListener('scroll', () => {
	let scrollBtn = document.querySelector('.scroll-button');

	if (window.scrollY > 200) {
		scrollBtn.classList.add('visible');
	} else {
		scrollBtn.classList.remove('visible');
	}
});

// Scrolls to top
let scrollBtn = document.querySelector('.scroll-button');

scrollBtn.addEventListener('click', () => {
	document.body.scrollIntoView({
		behavior: 'smooth'
	});
});
