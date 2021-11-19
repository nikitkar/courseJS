
let lastFilms, ratingFilm, genresFilm;

const personalMovieDB = {
    count: 0,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');

        while(personalMovieDB.count == '' || personalMovieDB.count == ' ' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            alert("Ошибка, введите число");
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
        return personalMovieDB.count;
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            lastFilms = prompt('Один из последних простмотренных фильмов', '');
            ratingFilm = +prompt('На сколько оцените его?', '');
            if(lastFilms != '' && lastFilms != ' ' && lastFilms != null && lastFilms.length < 50 && !parseInt(lastFilms) &&
                ratingFilm != '' && ratingFilm != ' ' && ratingFilm != 0 && parseInt(ratingFilm)) personalMovieDB.movie[lastFilms] = ratingFilm;
            else {
                alert('Ошибка, повторите ввод'); i--;
            }
        }
    },
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++) {
            genresFilm = prompt('Ваш любимый жанр по номером ' + (i+1));
            if(genresFilm != '' && genresFilm != ' ' && genresFilm != null && !parseInt(genresFilm)) personalMovieDB.genres[i] = genresFilm;
            else {alert("Error"); i--;}
        }

        personalMovieDB.genres.forEach((value, i) => {
            console.log(`Любимый жанр ${i} - это ${value}`);
        });
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count <= 10) console.log('Просмотрено довольно мало фильмов');
        else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) console.log('Вы классический зритель');
        else if(personalMovieDB.count >= 30) console.log('Вы киноман');
        else console.log('Произошла ошибка');   
    },
    showMyDB: function(){ //toggleVisibleMyDB
        if(personalMovieDB.privat == true) console.log(personalMovieDB.genres);
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat == true) personalMovieDB.privat = false;
        else personalMovieDB.privat = true;
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);