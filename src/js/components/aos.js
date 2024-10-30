// Анимация AOS 
document.addEventListener('DOMContentLoaded', function () {

	const contentModules = document.querySelectorAll('.content-module__flex-img--center');

	contentModules.forEach(function (module) {
		const img = module.querySelector('img');
		const paragraphs = module.querySelectorAll('p');

		if (img) {
			if (img.nextElementSibling && img.nextElementSibling.tagName === 'P') {
				img.setAttribute('data-aos', 'fade-left');
			} else {
				img.setAttribute('data-aos', 'fade-right');
			}
		}

		paragraphs.forEach(function (paragraph) {
			if (paragraph.previousElementSibling && paragraph.previousElementSibling.tagName === 'IMG') {
				paragraph.setAttribute('data-aos', 'fade-right');
			} else {
				paragraph.setAttribute('data-aos', 'fade-left');
			}
		});
	});

	const allParagraphs = document.querySelectorAll('.content-module p');

	allParagraphs.forEach(function (paragraph) {
		if (!paragraph.closest('.content-module__flex-img--center')) {
			paragraph.setAttribute('data-aos', 'fade-up');
		}
	});

	const allImages = document.querySelectorAll('.content-module img');

	allImages.forEach(function (img) {
		if (!img.closest('.content-module__flex-img--center')) {
			img.setAttribute('data-aos', 'fade-up');
		}
	});

	const headerTitles = document.querySelectorAll('.header-module__title');
	headerTitles.forEach(function (headerTitle) {
		headerTitle.setAttribute('data-aos', 'fade-up');
	});

	const notifications = document.querySelectorAll('.notification');
	notifications.forEach(function (notification) {
		notification.setAttribute('data-aos', 'fade-up');
	});

	const moduleLocks = document.querySelectorAll('.module__lock');
	moduleLocks.forEach(function (moduleLock) {
		moduleLock.setAttribute('data-aos', 'fade-up');
	});

	const moduleSeparators = document.querySelectorAll('.module__separator');
	moduleSeparators.forEach(function (moduleSeparator) {
		moduleSeparator.setAttribute('data-aos', 'fade-up');
	});

	setTimeout(function () {
		AOS.init({
			once: true,
			duration: 600,
			disable: function () {
				var maxWidth = 1024;
				return window.innerWidth < maxWidth;
			}
		});
	}, 500);
});