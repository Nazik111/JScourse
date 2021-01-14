"use strict";

let personalMovieDB = {
    count: 5,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function showMyDb(personalMovieDB) {
if (personalMovieDB.private === false) {
    console.log(personalMovieDB)
}
}

showMyDb(personalMovieDB);


const writeYourGenres = (personalMovieDB) => {
    for (let i=0; i<3; i++) {
         let question = prompt(`Ваш любимий жанр по номеру: ${i+1}?`);
        personalMovieDB.genres.push(question);
    }

}

writeYourGenres(personalMovieDB);
console.log(personalMovieDB);