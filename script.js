'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start() {
    do {
      this.count = +prompt('Скільки фільмів ви вже переглянули?', '');
    } while(this.count === 0 || isNaN(this.count))
  },

  rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
      const filmName = prompt('Один з останніх переглянутих фільмів?', '');
      const filmRate = +prompt('На скілько оцінюєте його?', '');

      if(filmName !== null && filmName.trim() !== '' && filmName.trim().length < 50 && filmRate !== 0 && !isNaN(filmRate)) {
        this.movies[filmName] = filmRate;
      } else {
        i--;
      }
    }
  },

  detectPersonalLevel() {
    if(this.count < 10) {
      console.log('Переглянуто доволі мало фільмів');
    } else if(this.count >= 10 && this.count < 30) {
      console.log('Ви класичний глядач');
    } else if(this.count >= 30) {
      console.log('Ви кіноман');
    } else {
      console.log('Виникла помилка');
    }
  },

  showMyDB(hidden) {
    if(!hidden) {
      console.log(this);
    }
  },

  toggleVisibleMyDB() {
    this.privat = !this.privat;
  },

  writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш улюблений жанр під номером ${i}`, '');

      if(genre !== null && genre.trim() !== '') {
        this.genres[i - 1] = genre;
      } else {
        i--;
      }
    }

    this.genres.forEach((item, i) => {
      console.log(`Улюблений жанр №${i + 1} - це ${item}`);
    });
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
