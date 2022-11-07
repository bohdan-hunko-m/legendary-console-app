'use strict';

let numberOfFilms;

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);

function start() {
  numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

  while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
  }
}

function rememberMyFilms() {
  for(let i = 0; i < 2; i++) {
    const filmName = prompt('Один з останніх переглянутих фільмів?', '');
    const filmRate = +prompt('На скілько оцінюєте його?', '');

    if(filmName != null && filmRate != null && filmName != '' && filmRate != '' && filmName.length < 50) {
      personalMovieDB.movies[filmName] = filmRate;
    } else {
      i--;
    }
  }
}

function detectPersonalLevel() {
  if(personalMovieDB.count < 10) {
    console.log('Переглянуто доволі мало фільмів');
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач');
  } else if(personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
  } else {
    console.log('Виникла помилка');
  }
}

function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`, '');
  }
}
