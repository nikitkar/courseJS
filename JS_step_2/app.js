const firstZadanie = function(){
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    const personalMovieDB = {
        count: numberOfFilms,
        movie: {},
        actors: {},
        genres: [],
        privat: false
    };

    let lastFilms, ratingFilm, i = 0;
    for(i = 0; i < 3; i++){
        lastFilms = prompt('Один из последних простмотренных фильмов', '');
        ratingFilm = +prompt('На сколько оцените его?', '');
        if(lastFilms != '' && lastFilms != ' ' && lastFilms != null && lastFilms.length < 50 && !parseInt(lastFilms) &&
           ratingFilm != '' && ratingFilm != ' ' && ratingFilm != 0 && parseInt(ratingFilm)) personalMovieDB.movie[lastFilms] = ratingFilm;
        else {
            alert('Ошибка, повторите ввод'); i--;
        }
    }

    // while(i < 3){
    //     lastFilms = prompt('Один из последних простмотренных фильмов', '');
    //     ratingFilm = +prompt('На сколько оцените его?', '');
    //     if(lastFilms != '' && lastFilms != ' ' && lastFilms != null && lastFilms.length < 50 && !parseInt(lastFilms) &&
    //        ratingFilm != '' && ratingFilm != ' ' && ratingFilm != 0 && parseInt(ratingFilm)) personalMovieDB.movie[lastFilms] = ratingFilm;
    //     else {
    //         alert('Ошибка, повторите ввод'); i--;
    //     }
    // }

    
    // do{
    //     lastFilms = prompt('Один из последних простмотренных фильмов', '');
    //     ratingFilm = +prompt('На сколько оцените его?', '');
    //     if(lastFilms != '' && lastFilms != ' ' && lastFilms != null && lastFilms.length < 50 && !parseInt(lastFilms) &&
    //        ratingFilm != '' && ratingFilm != ' ' && ratingFilm != 0 && parseInt(ratingFilm)) personalMovieDB.movie[lastFilms] = ratingFilm;
    //     else {
    //         alert('Ошибка, повторите ввод'); i--;
    //     }
    // }
    // while(i < 3);

    if(personalMovieDB.count <= 10) console.log('Просмотрено довольно мало фильмов');
    else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) console.log('Вы классический зритель');
    else if(personalMovieDB.count >= 30) console.log('Вы киноман');
    else console.log('Произошла ошибка');

    console.log(personalMovieDB);
};

firstZadanie();