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
/* harmony import */ var _js_components_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/script.js */ "./src/js/components/script.js");
/* harmony import */ var _js_components_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_components_script_js__WEBPACK_IMPORTED_MODULE_1__);
// import "../js/components/ex.js";



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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map