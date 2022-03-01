// Задание на урок
/*
1) У нас есть рабочее приложение, состоящее из отдельных функций. Представьте, что 
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта
personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisybleMyDB, который при вызове будет проверять private. Если 
оно false - он 
переключает его в true. Если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "Отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) это (название из массива) "
*/

// Запрашиваем у зрителя количество просмотренних им фильмов
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
    privat: false,

    // Запрашиваем у зрителя поледний просмотренний его фильм
    // и его оценку к этому фильму
    remembersMyFilms() {
        let movies = 0;
        while (movies < 2) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = +prompt("На сколько оцените этот фильм?", "");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                movies--;
            }

            movies++;
        }
    },

    // Оценка зрителя на киномана
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов.');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классический зритель.');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман.');
        } else {
            alert('Произошла ошибка.');
        }
    },

    // Показываем БД, если БД видимая 
    // Так тоже правильно
    // function showMyDb() {
    //     if (personalMovieDB.privat == false) {
    //         console.log(personalMovieDB);
    //     }
    // }

    showMyDb(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },

    // Запрашиваем у пользователя любимый жанр фильма
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
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (genre == null || genre == '') {
                i--;
            } else {
                this.genres[i - 1] = genre;
            }
        }

        this.genres.forEach((element, index) => {
            console.log(`Любимый жанр ${index + 1} это ${element}`);
        });
    },

    // Преключатель видимости БД
    toggleVisybleMyDB() {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
};

// Вызываем методы

// remembersMyFilms();

// detectPersonalLevel();

personalMovieDB.showMyDb(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisybleMyDB();