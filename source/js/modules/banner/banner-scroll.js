const scrollLink = document.querySelector('[data-banner-link]'); // banner scroll link

const smoothScrollInit = () => {
  scrollLink.addEventListener('click', (evt) => {
    evt.preventDefault();

    document.querySelector(evt.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
};

export {smoothScrollInit};
