import {modalNameInput} from './popup';
import {modalTelInput} from './popup-storage';
import {phoneMask} from '../feedback/form-validation';

const telPattern = /^([-+()0-9\s]+)$/; // Паттерн телефона

// Валидация формы
const modalValidationInit = () => {
  // Тестим ввод имени
  modalNameInput.addEventListener('input', () => {
    const nameValue = modalNameInput.value; // Значение поля имени

    // Проверяем длину имени
    if (nameValue.length < 1) {
      modalNameInput.setCustomValidity('Имя должно состоять минимум из 1 символа');
      modalNameInput.style.outline = '2px solid #CC0000';
    } else {
      modalNameInput.setCustomValidity('');
      modalNameInput.style.outline = '';
    }
  });

  // Тестим ввод телефона
  modalTelInput.addEventListener('input', (evt) => {
    const telValue = modalTelInput.value; // Значение поля телефона

    evt.target.value = phoneMask(evt.target.value); // Маска

    // Проверяем паттерн
    if (!telPattern.test(telValue)) {
      modalTelInput.setCustomValidity('Номер телефона может содержать только числа');
      modalTelInput.style.outline = '2px solid #CC0000';
    } else {
      modalTelInput.setCustomValidity('');
      modalTelInput.style.outline = '';
    }
  });
};

export {modalValidationInit};
