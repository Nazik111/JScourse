"use strict";

while(true) {

    const numberOfFilms = prompt("How many films have you seen?", "");
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    }

    console.log(personalMovieDB.count)


    if (personalMovieDB.count < 10 && personalMovieDB.count !=null && personalMovieDB.count !== "") {
        console.log('Мало фільмів.')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Класичний глядач.')
    } else if (personalMovieDB.count > 30) {
        console.log('Ви кіноман.')
    } else if (personalMovieDB.count === "") {
        console.log('Помилка');
    } else if (personalMovieDB.count === null || personalMovieDB.count === "") {
        console.log('Помилка');
    }
    else if (personalMovieDB.count === 'stop') {
        break;
    }
}





