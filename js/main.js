
var elMobileWrapper = document.querySelector('.btns');
var elOpenBtn = document.querySelector('.header__button-toggler');
var elCloseBtn = document.querySelector('.header__button-toggler-open');
elOpenBtn.addEventListener('click', () => {
    elMobileWrapper.classList.add('active');
});
elCloseBtn.addEventListener('click', () => {
    elMobileWrapper.classList.remove('active');
});
