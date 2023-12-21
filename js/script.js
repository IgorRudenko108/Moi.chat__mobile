// show download progress
const download = document.querySelector('.button'),
addclass = document.querySelector('.controller');
download.addEventListener('click', function() {
   addclass.classList.toggle('show')
})

// download progress
const buffering = () => {
   const bar = document.querySelector('.loader');
   let width = 1; 
   var interval = 100,
      remaining = interval/10,
      minus_rem = remaining/100;
      
   const rate = () => {
      bar.style.width = `${width}%`;
      document.querySelector('.percentage').innerHTML = `${width}%`;

      remaining = remaining - minus_rem;

      if (width >= 100) {
         remaining = 0;
         document.querySelector('.done').style = 'display:flex; position:absolute; z-index:2;';
         clearInterval(intervale); 
      }

      width++;
   }
   const intervale = setInterval(rate, interval);
}
document.querySelector('button').addEventListener('click', buffering)



