const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) center/cover no-repeat';

const promo__interactiveItem = document.querySelectorAll('.promo__interactive-item');

movieDB.movies.sort();
for(let i = 0; i < promo__interactiveItem.length; i++) promo__interactiveItem[i].textContent = (i + 1) + '. ' + movieDB.movies[i];