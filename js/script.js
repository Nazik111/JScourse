"use strict";

import tabs  from  './modules/tabs';
import modal  from './modules/modal';
import timer from './modules/timer';
import card  from './modules/card';
import calc  from './modules/calc';
import forms  from './modules/Forms';
import slider from './modules/slider';
import {openModal} from './modules/modal'
import 'jquery';

window.addEventListener('DOMContentLoaded', function() {



    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]','.modal');
    timer('.timer', '2022-06-11');
    calc();
    card();
    forms(modalTimerId, 'form');
    slider({
container: '.offer__slider',
nextArrow: '.offer__slider-next',
        previousArrow: '.offer__slider-prev',
        totalCounet: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'

    });




});


