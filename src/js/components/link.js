// Навигация по ссылкам в меню
const currentUrl = window.location.pathname.split('/').pop(); // Получаем только имя файла
const menuLinks = document.querySelectorAll('.menu__link');

// Проходим по всем ссылкам и проверяем, совпадает ли их href с текущим URL
menuLinks.forEach(link => {
	const linkHref = link.getAttribute('href');
	if (linkHref === currentUrl) {
		// Если совпадает, добавляем класс _active к родительскому элементу <li>
		link.parentElement.classList.add('_active');
	}
});

