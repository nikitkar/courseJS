const secondZadanie = function(){
    let numberOfFilms;

    function start(){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

        while(numberOfFilms == '' || numberOfFilms == ' ' || numberOfFilms == null || isNaN(numberOfFilms)){
            alert("Ошибка, введите число");
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    }
    start();

    const personalMovieDB = {
        count: numberOfFilms,
        movie: {},
        actors: {},
        genres: [],
        privat: false
    };

    function rememberMyFilms(){
        for(let i = 0; i < 2; i++){
            const lastFilms = prompt('Один из последних простмотренных фильмов', ''),
                  ratingFilm = +prompt('На сколько оцените его?', '');
            if(lastFilms != '' && lastFilms != ' ' && lastFilms != null && lastFilms.length < 50 && !parseInt(lastFilms) &&
               ratingFilm != '' && ratingFilm != ' ' && ratingFilm != 0 && parseInt(ratingFilm)) personalMovieDB.movie[lastFilms] = ratingFilm;
            else {
                alert('Ошибка, повторите ввод'); i--;
            }
        }
    }
    rememberMyFilms();
    
    function detectPersonalLevel(){
        if(personalMovieDB.count <= 10) console.log('Просмотрено довольно мало фильмов');
        else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) console.log('Вы классический зритель');
        else if(personalMovieDB.count >= 30) console.log('Вы киноман');
        else console.log('Произошла ошибка');    
    }

    function showMyDB(){
        if(personalMovieDB.privat != false) console.log(personalMovieDB);
    }

    function writeYourGenres(){
        for(let i = 0; i < 3; i++) personalMovieDB.genres[i] = prompt('Ваш любимый жанр по номером ' + (i+1));
        return personalMovieDB.genres;
    }
    
    detectPersonalLevel();
    showMyDB();
    console.log(writeYourGenres());
    console.log(personalMovieDB);
};
secondZadanie();