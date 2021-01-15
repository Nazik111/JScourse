"use strict";


const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),//[1] індекс елемента з псевдомассиву
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
wrapper = document.querySelector('.wrapper');


buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 60vw';

/*
for (let i=0; i<hearts.length; i++) {
    hearts[i].style.backgroundColor='orange'
}*/

hearts.forEach(item => {
    item.style.backgroundColor = 'orange';
})

const div = document.createElement('div');
//const text = document.createTextNode('Hello world');

div.classList.add('black');

/*circles[0].remove();*/

document.body.append(div)

div.innerHTML = "<h1>hello<h2/>";

div.insertAdjacentHTML('beforebegin', "<h2>Hello world!</h2>")