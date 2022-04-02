const formFeedback = document.querySelector('[data-form]'); // Форма
const formNameInput = formFeedback.querySelector('[data-form-name'); // Инпут имени
const formTelInput = formFeedback.querySelector('[data-form-tel]'); // Инпут телефона

const telPattern = /^([-+()0-9\s]+)$/; // Паттерн телефона

// Маска телефона
const phoneMask = (phone) => {
  return phone
      .replace(/\D/g, '')
      .replace(/^(\d)/, '+7(')
      .replace(/(\d{3})/, '$1)');
};

// Валидация формы
const formValidationInit = () => {
  // Тестим ввод имени
  formNameInput.addEventListener('input', () => {
    const nameValue = formNameInput.value; // Значение поля имени

    // Проверяем длину имени
    if (nameValue.length < 1) {
      formNameInput.setCustomValidity('Имя должно состоять минимум из 1 символа');
      formNameInput.style.outline = '2px solid #CC0000';
    } else {
      formNameInput.setCustomValidity('');
      formNameInput.style.outline = '';
    }
  });

  // Тестим ввод телефона
  formTelInput.addEventListener('input', (evt) => {
    const telValue = formTelInput.value; // Значение поля телефона

    evt.target.value = phoneMask(evt.target.value); // Маска

    // Проверяем паттерн
    if (!telPattern.test(telValue)) {
      formTelInput.setCustomValidity('Номер телефона может содержать только числа');
      formTelInput.style.outline = '2px solid #CC0000';
    } else {
      formTelInput.setCustomValidity('');
      formTelInput.style.outline = '';
    }
  });
};

export {formValidationInit, formFeedback, formNameInput, formTelInput, phoneMask};
