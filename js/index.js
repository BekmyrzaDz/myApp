// Задание на урок
/*
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDb, которая будет проверять свойство privat.
Если стоит в позиции false - выводит главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет
3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". 
Каждый ответ записыватся в массив данных genres

P.S. Функции вызывать не обязательно
*/
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// writeYourGenres();

function remembersMyFilms() {
    let movies = 0;
    while (movies < 2) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = +prompt("На сколько оцените этот фильм?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            movies--;
        }

        movies++;
    }
}

// remembersMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов.');
    } else if (personalMovieDB.count < 30) {
        alert('Вы классический зритель.');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман.');
    } else {
        alert('Произошла ошибка.');
    }
}

// detectPersonalLevel();

// Так тоже правильно
// function showMyDb() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

// Мой вариант
// function writeYourGenres() {
//     let genre;

//     for (let i = 1; i <= 3; i++) {
//         genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

//         let copy = genre;

//         if (genre !== null && genre !== '') {
//             personalMovieDB.genres.push(copy);
//         }
//     }
// }

// Решение
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();