import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

import {headerPositionInit} from './modules/header/fixed-header';

import {showButtonInit} from './modules/about/show-more';

import {accordionInit} from './modules/footer/accordion';

import {smoothScrollInit} from './modules/banner/banner-scroll';

import {formValidationInit} from './modules/feedback/form-validation';
import {initLocalStorage} from './modules/feedback/form-storage';
import {popupInit} from './modules/popup/popup';
import {modalValidationInit} from './modules/popup/popup-validation';
import {initModalLocalStorage} from './modules/popup/popup-storage';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  headerPositionInit();
  smoothScrollInit();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    showButtonInit();
    accordionInit();
    formValidationInit();
    initLocalStorage();
    popupInit();
    modalValidationInit();
    initModalLocalStorage();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
