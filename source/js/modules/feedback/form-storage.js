import {formFeedback, formNameInput, formTelInput} from './form-validation';

const initLocalStorage = () => {
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
    formNameInput.value = storageName;
  }

  // Если в локальном хранилище есть номер телефона — автоматически вписываем его
  if (storageTel) {
    formTelInput.value = storageTel;
  }

  // Записываем введённые значения в локальное хранилище
  formFeedback.addEventListener('submit', () => {
    if (isStorageSupport && formNameInput.value && formTelInput.value) {
      localStorage.setItem('name', formNameInput.value);
      localStorage.setItem('tel', formTelInput.value);
    }
  });
};

export {initLocalStorage};
