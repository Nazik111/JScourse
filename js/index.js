"use strict";


const box = document.getElementById('box')
console.log(box)

const buttons = document.getElementsByTagName('button');//[1] індекс елемента з псевдомассиву
console.log(buttons[3]) //індекс елемента псевдомассиву

const circles = document.getElementsByClassName('circle')
console.log(circles)

const hearts = document.querySelectorAll('.heart');

hearts.forEach((item)=> {
console.log(item);
})

const oneHeart = document.querySelector('.heart')
console.log(oneHeart)

