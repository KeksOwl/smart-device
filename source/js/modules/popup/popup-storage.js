import {modalWindow, modalNameInput} from './popup';

const modalTelInput = modalWindow.querySelector('[data-modal-tel]'); // Инпут телефона

const initModalLocalStorage = () => {
  // Переменные локальных данных
  let isStorageSupport = true;
  let storageName = '';
  let storageTel = '';

  // Проверяем работоспособность локального храналища в браузере
  try {
    storageName = localStorage.getItem('name');
    storageTel = localStorage.getItem('tel');
  } catch (err) {
    isStorageSupport = false;
  }

  // Если в локальном хранилище есть имя — автоматически вписываем его
  if (storageName) {
    modalNameInput.value = storageName;
  }

  // Если в локальном хранилище есть номер телефона — автоматически вписываем его
  if (storageTel) {
    modalTelInput.value = storageTel;
  }

  // Записываем введённые значения в локальное хранилище
  modalWindow.addEventListener('submit', () => {
    if (isStorageSupport && modalNameInput.value && modalTelInput.value) {
      localStorage.setItem('name', modalNameInput.value);
      localStorage.setItem('tel', modalTelInput.value);
    }
  });
};

export {initModalLocalStorage, modalTelInput};
