// Search 
const searchForm = document.querySelector('.header-page__search');
const searchInput = document.querySelector('.search__input');

if (searchForm && searchInput) {
	searchInput.setAttribute('maxlength', '100');
	searchInput.addEventListener('input', function () {
		if (searchInput.value.length > 4) {
			searchForm.classList.add('--active');
		} else {
			searchForm.classList.remove('--active');
		}
	});
}