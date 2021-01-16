"use strict"

const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

let i = 0;
const deleteElement = (e) => {
console.log(e.target)
console.log(e.type)
    i++;
/*
if(i === 1) {
        btn.removeEventListener('click',  deleteElement)
    }
*/
}



btn.addEventListener('click',  deleteElement,  {once:true})
overlay.addEventListener('click', deleteElement, {once:true})


const link = document.querySelector('a')
link.addEventListener('click', (event)=> {
    event.preventDefault();

    console.log(event.target)
})