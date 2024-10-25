// Search 
const searchForm = document.querySelector('.header-page__search');
const searchInput = document.querySelector('.search__input');

if (searchForm && searchInput) {
	searchInput.setAttribute('maxlength', '100');
	searchInput.addEventListener('input', function () {
		if (searchInput.value.length > 3) {
			searchForm.classList.add('--active');
		} else {
			searchForm.classList.remove('--active');
		}
	});
}

// File-input
const fileInput = document.getElementById('file-input');
const fileLabel = document.getElementById('file-label');
if (fileInput) {
	fileInput.addEventListener('change', function () {
		const fileName = this.files[0] ? this.files[0].name : 'Загрузить';
		if (fileLabel) {
			fileLabel.textContent = fileName;
		}
	});
}

// Отображение File-input в зависимости от страницы
if (document.body.classList.contains('page__body--admin')) {
	const headerActions = document.querySelector('.header__actions');
	if (headerActions) {
		headerActions.classList.add('--active');
	}
}
