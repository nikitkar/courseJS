'use strict';

const inputRud = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRud.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200){
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRud.value / data.current.usd).toFixed(3);
        } 
        else{
            inputUsd.value = "Что-то пошло не так";
        }
    });

});