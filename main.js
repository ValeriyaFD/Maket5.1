const btnMore = document.querySelector('.toggle-button');
const wrapperMore = document.querySelector('.swiper-wrapper');
const buttonText = document.querySelector('.toogle-button--name');
const buttonIcon = document.querySelector('.toogle-button--icon');

btnMore.addEventListener('click', function(){
    wrapperMore.classList.toggle('open')
    if (wrapperMore.classList.contains('open')){
        buttonText.textContent = 'Скрыть';
        buttonIcon.classList.toggle('flipped');
    } else {
        buttonText.textContent = 'Показать все';
        buttonIcon.classList.toggle('flipped');
    }
})
