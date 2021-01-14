"use strict";

const obj = {
    a: 10,
    b: 20,
    c: {
        x: 1,
        y:2
    }
};

const copy = Object.assign({},obj)
copy.c.x = 99;

console.log(obj,copy);

const video = ['youtube','vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal','blogger'],
    internet = [...video, ...blogs, 'hello'];
console.log(internet);

const john = {
    age: 20,
    height: 1.8
}

const student = {
    groups: 'KN-314',
    sayHello: function () {
        console.log('hello world')
    }
}

const john = Object.create(student);

Object.setPrototypeOf(john, student);

console.log(john.sayHello());
