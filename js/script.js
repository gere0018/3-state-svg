document.addEventListener("DOMContentLoaded", function(){
    var headphones= document.querySelector('#headphones');
    headphones.addEventListener('click', function(){
        headphones.classList.toggle('active');
    });
    var mic= document.querySelector('#mic');
    mic.addEventListener('click', function(){
        mic.classList.toggle('mic-active');
    });

});
