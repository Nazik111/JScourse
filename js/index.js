/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const array = [...movieDB.movies]
console.log(array.sort())


const promo = document.querySelector('.promo__adv')

const img = promo.querySelectorAll('.promo__adv img')

img.forEach(item => {
 item.remove()
})

const promoG = document.querySelector('.promo__genre')

promoG.textContent="Драма";

const poster = document.querySelector('.promo__bg')
poster.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

const promoList = document.querySelector('.promo__interactive-list');
const promoItem = document.querySelectorAll('.promo__interactive-item');

promoItem.forEach(item => {
    item.remove()
})

//We can do this practice using innerHtml=""...
promoItem.forEach(( item, i) => {
    item[i] = document.createElement('li');
    item[i].classList.add('promo__interactive-item')
    let deleteList = document.createElement('div');
    deleteList.classList.add('delete')
    item[i].textContent = `${i+1 }  ${array[i]}`;
    promoList.append(item[i])
    item[i].append(deleteList)
})




