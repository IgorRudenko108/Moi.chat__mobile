'use strict'

let installBtn = document.querySelectorAll('.footer__btn');
let controlsWrapper = document.querySelector('.footer__controls');


installBtn.forEach(item => {
   item.addEventListener('click', function(e) {
      item.parentElement.classList.add('active')
   })
});



