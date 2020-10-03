'use strict';
{
    const container = document.querySelector('.container');
    const st0 = document.querySelector('.st0');
    const st1 = document.querySelector('.st1');
    const button = document.getElementById('button');

    button.addEventListener("ontouchstart",()=> {
        st0.classList.add('active');
        st1.classList.add('active');
    }, false);
}