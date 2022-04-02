import {isEscapeKey} from '../../utils/util.js';

const popupButton = document.querySelector('[data-popup-button]'); // Кнопка «заказать звонок»

const modalWindow = document.querySelector('[data-modal]'); // Модальное окно
const modalCloseButton = modalWindow.querySelector('[data-modal-button]'); // Крестик в модалке

const modalNameInput = modalWindow.querySelector('[data-modal-name]'); // Инпут имени

// Обработчик закрытия модального окна при нажатии ESC
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalClose();
  }
};

// Обработчик закрытия модального окна при клике на область позади окна
const onOverlayClick = (evt) => {
  if (evt.target === document.body) {
    modalClose();
  }
};

// Отключаем таб на всей странице, кроме модалки
const handleKey = (evt) => {
  if (evt.keyCode === 9) {
    let focusable = modalWindow.querySelectorAll('input,button,select,textarea');
    if (focusable.length) {
      let first = focusable[0];
      let last = focusable[focusable.length - 1];
      let shift = evt.shiftKey;
      if (shift) {
        if (evt.target === first) {
          last.focus();
          evt.preventDefault();
        }
      } else {
        if (evt.target === last) {
          first.focus();
          evt.preventDefault();
        }
      }
    }
  }
};

// Функция закрытия модалки
const modalClose = () => {
  modalWindow.style.display = 'none';
  document.body.classList.remove('modal-open');

  modalCloseButton.removeEventListener('click', modalClose);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  window.removeEventListener('keydown', handleKey);
};

// Функция отображения модалки
const onClickShowModal = (evt) => {
  evt.preventDefault();
  modalWindow.style.display = 'block';
  document.body.classList.add('modal-open');

  modalCloseButton.addEventListener('click', modalClose);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onOverlayClick);
  window.addEventListener('keydown', handleKey);

  modalNameInput.focus();
};

const popupInit = () => {
  popupButton.addEventListener('click', onClickShowModal); // Оживляем кнопку при запуске js'а
};

export {popupInit, modalWindow, modalNameInput};
