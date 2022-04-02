const pageHeader = document.querySelector('[data-header]'); // Header
const headerOffset = pageHeader.offsetTop; // Оффсет шапки

const pageMain = document.querySelector('[data-main]'); // Main

// При скролле страницы выполнять функцию checkHeaderPosition
const headerPositionInit = () => {
  window.onscroll = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) { // Проверяем, чтобы ширина была равна десктопной
      checkHeaderPosition();
    }
  };
};

// При скролле меняет position шапки на фиксированную
const checkHeaderPosition = () => {
  if (window.pageYOffset > headerOffset) {
    const headerHeight = pageHeader.offsetHeight; // Проверяем высоту шапки

    pageHeader.dataset.header = 'is-fixed'; // Фиксируем шапку
    pageMain.style.margin = `${headerHeight}px 0 0 0`; // Делаем отступ для Main на высоту шапки (чтобы не скакала страница)
  } else {
    pageHeader.dataset.header = 'is-static'; // Возвращаем шапку в поток
    pageMain.style.margin = '0'; // Удаляем отступ
  }
};

export {headerPositionInit};
