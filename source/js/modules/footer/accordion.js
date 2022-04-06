const footerNavBlock = document.querySelector('[data-footer-nav]'); // footer-nav block
const locationBlock = document.querySelector('[data-footer-location]'); // location block

const footerNavButton = footerNavBlock.querySelector('[data-footer-nav-button]'); // footer-nav button
const locationButton = locationBlock.querySelector('[data-location-button]'); // location button

const footerNavWrapper = footerNavBlock.querySelector('[data-footer-nav-wrapper]'); // footer-nav wrapper
const locationList = locationBlock.querySelector('[data-location-list]'); // location list

// Событие нажатия кнопки в навигации разделов
const onNavButtonClick = (evt) => {
  if (!evt.target.matches('a')) {
    locationList.dataset.locationList = 'is-hidden';
    locationButton.dataset.locationButton = 'is-plus';

    const footerNavStatus = footerNavWrapper.getAttribute('data-footer-nav-wrapper');

    if (footerNavStatus === 'is-hidden') {
      footerNavWrapper.dataset.footerNavWrapper = 'is-shown';
      footerNavButton.dataset.footerNavButton = 'is-minus';
    } else {
      footerNavWrapper.dataset.footerNavWrapper = 'is-hidden';
      footerNavButton.dataset.footerNavButton = 'is-plus';
    }
  }
};

// Событие нажатия кнопки в адресе/локации
const onLocationButtonClick = (evt) => {
  if (!evt.target.matches('a')) {
    footerNavWrapper.dataset.footerNavWrapper = 'is-hidden';
    footerNavButton.dataset.footerNavButton = 'is-plus';

    const locationListStatus = locationList.getAttribute('data-location-list');

    if (locationListStatus === 'is-hidden') {
      locationList.dataset.locationList = 'is-shown';
      locationButton.dataset.locationButton = 'is-minus';
    } else {
      locationList.dataset.locationList = 'is-hidden';
      locationButton.dataset.locationButton = 'is-plus';
    }
  }
};

// Активируем аккордеон при загрузке js
const accordionInit = () => {
  // Скрываем списки и меняем внешний вид кнопок
  footerNavWrapper.dataset.footerNavWrapper = 'is-hidden';
  footerNavButton.dataset.footerNavButton = 'is-plus';

  locationList.dataset.locationList = 'is-hidden';
  locationButton.dataset.locationButton = 'is-plus';

  footerNavBlock.addEventListener('click', onNavButtonClick);
  locationBlock.addEventListener('click', onLocationButtonClick);
};

export {accordionInit};
