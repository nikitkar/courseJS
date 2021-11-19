document.addEventListener('DOMContentLoaded', ()=>{
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

    const moviList = document.querySelector('.promo__interactive-list'),
          formAdd = document.querySelector('.add'),
          newNameFilm = formAdd.querySelector('.adding__input'),
          filmLove = formAdd.querySelector('[type="checkbox"]'),
          btnEnter = formAdd.querySelector('button');

    

    const createElement = (name, parent) => {
        parent.innerHTML = '';
      
        for(let i = 0; i < name.length; i++){
            parent.innerHTML += '<li class="promo__interactive-item">' + (i+1) + '. ' + name[i] + '<div class="delete"><div></li>';
        }
        
        const deletElem = document.querySelectorAll('.delete');

        deletElem.forEach((value, i) => {
            value.addEventListener('click', () => {
                value.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createElement(name, parent);
            });
        });
    };

    
    
    btnEnter.addEventListener('click', (e)=> {
        e.preventDefault();

        moviList.innerHTML = '';
        let nameFilm = newNameFilm.value;

        if(nameFilm){
            if(nameFilm.lenght > 21) nameFilm = nameFilm.substring(0, 22) + '...';
        
            if(filmLove.checked) console.log('Добавляем любимый фильм');

            movieDB.movies.push(nameFilm);
            movieDB.movies.sort();
        }

        newNameFilm.value = '';
        createElement(movieDB.movies, moviList);
    });

    createElement(movieDB.movies, moviList);
});