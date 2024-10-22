// Search 
const searchForm = document.querySelector('.header-page__search');
const searchInput = document.querySelector('.search__input');

// Проверяем, существуют ли элементы перед добавлением обработчика событий
if (searchForm && searchInput) {
	searchInput.addEventListener('input', function () {
		if (searchInput.value.length > 4) {
			searchForm.classList.add('--active');
		} else {
			searchForm.classList.remove('--active');
		}
	});
} 