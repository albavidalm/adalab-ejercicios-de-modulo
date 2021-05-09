"use strict";

/*
const movies = ["The Shining", "Zoolander", "John Wick"];

movies[3] = "Traisnpotting";
console.log(movies);

movies[3] = "The Fight Club";
console.log(movies);

movies[0] = "Shaun of the Dead";
console.log(movies);
*/

function workWithMovies() {
  const movies = ["The Shining", "Zoolander", "John Wick"];
  movies[3] = "Traisnpotting";
  movies[3] = "The Fight Club";
  movies[0] = "Shaun of the Dead";
  return movies;
}
console.log(workWithMovies());
