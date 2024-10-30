/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/components/link.js */ "./src/js/components/link.js");
/* harmony import */ var _js_components_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_components_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/aos.js */ "./src/js/components/aos.js");
/* harmony import */ var _js_components_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_components_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/components/script.js */ "./src/js/components/script.js");
/* harmony import */ var _js_components_script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_components_script_js__WEBPACK_IMPORTED_MODULE_2__);
// import "../js/components/ex.js";




/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {

// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check.js";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/components/aos.js":
/*!**********************************!*\
  !*** ./src/js/components/aos.js ***!
  \**********************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/js/components/link.js":
/*!***********************************!*\
  !*** ./src/js/components/link.js ***!
  \***********************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/js/components/script.js":
/*!*************************************!*\
  !*** ./src/js/components/script.js ***!
  \*************************************/
/***/ (() => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions.js */ "./src/js/_functions.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_js__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map