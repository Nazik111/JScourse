"use strict";

const numberOfFilms = prompt("How many films have you seen?","");



const personalMovieDB = {
    count: `${numberOfFilms}`,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const lastFilm = prompt("Last film?","");
const rateFilm = prompt("Film rating:","");
const a = prompt("Last film?","");
const b = prompt("Film rating:","");


personalMovieDB.movies = {
[lastFilm]:rateFilm,
    [a]:b
}

personalMovieDB.movies[lastFilm] = rateFilm;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB)