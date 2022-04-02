const aboutBlock = document.querySelector('[data-about]'); // Блок «о компании»
const showButton = aboutBlock.querySelector('[data-button]'); // Кнопка «подробнее» / «свернуть»
const aboutParagraphs = aboutBlock.querySelectorAll('p'); // Параграфы блока «о компании»
const aboutParagraphsArray = Array.from(aboutParagraphs); // Массив всех параграфов блока
const aboutParagraphsArrayToShow = aboutParagraphsArray.splice(0, 2); // Первые два параграфа, которые необходимо отобразить по умолчанию

const textCutter = aboutBlock.querySelector('span'); // Часть текста, которая должна урезаться на мобильной версии

// Событие при клике на кнопку
const showButtonOnClick = () => {
  if (showButton.textContent === 'Подробнее') {
    // Отображаем все параграфы
    aboutParagraphsArray.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });

    // Показываем обрезанный текст
    textCutter.style.display = 'inline';

    // Меняем содержимое/значение кнопки
    showButton.textContent = 'Свернуть';
  } else if (showButton.textContent === 'Свернуть') {
    // Прячем все параграфы
    aboutParagraphsArray.forEach((paragraph) => {
      paragraph.style.display = 'none';
    });

    // Обрезаем текст на мобилке
    if (window.matchMedia('(max-width: 767px)').matches) { // Проверяем, чтобы ширина была равна мобильной
      textCutter.style.display = 'none';
    }

    // Показываем первые два параграфа по умолчанию
    aboutParagraphsArrayToShow.forEach((paragraph) => {
      paragraph.style.display = 'block';
    });
    // Меняем содержимое/значение кнопки
    showButton.textContent = 'Подробнее';
  }
};

const showButtonInit = () => {
  // Показываем кнопку
  showButton.dataset.button = 'is-shown';

  // Прячем все параграфы
  aboutParagraphsArray.forEach((paragraph) => {
    paragraph.style.display = 'none';
  });

  // Показываем первые два параграфа по умолчанию
  aboutParagraphsArrayToShow.forEach((paragraph) => {
    paragraph.style.display = 'block';
  });

  // Обрезаем текст на мобилке
  if (window.matchMedia('(max-width: 767px)').matches) { // Проверяем, чтобы ширина была равна мобильной
    textCutter.style.display = 'none';
  }

  // Навешиваем обработчик события нажатия на кнопку
  showButton.addEventListener('click', showButtonOnClick);
};

export {showButtonInit};
