function firstZadanie(){
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    const personalMovieDB = {
        count: numberOfFilms,
        movie: {},
        actors: {},
        genres: [],
        privat: false
    };

    const lastFilmsOne = prompt('Один из последних простмотренных фильмов', ''),
    ratingFilmOne = +prompt('На сколько оцените его?', ''),
    lastFilmsTwo = prompt('Один из последних простмотренных фильмов', ''),
    ratingFilmTwo = +prompt('На сколько оцените его?', '');

    personalMovieDB.movie[lastFilmsOne] = ratingFilmOne;
    personalMovieDB.movie[lastFilmsTwo] = ratingFilmTwo;

    console.log(personalMovieDB);
}

firstZadanie();