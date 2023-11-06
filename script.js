function typeWrite(elemento) {

  const textoArray = elemento.innerHTML.split('');

 elemento.innerHTML = ' ';

  textoArray.forEach(function (letra, i) {

    setTimeout(function () {

      me.innerHTML += letra;
   }, 5 * i)

 });
  
}


const me = document.querySelector("#me")
const more = document.querySelector("#more")
const linkMe = document.querySelector(".links")
const main = document.querySelector(".home")
const jobs = document.querySelector(".job")
const contact = document.querySelector(".contact")
let recentIndex = 0;



function nextMessage() {

  me.style.opacity = 1;

  main.classList.remove ("disable-link")

  function next(){

  me.textContent = motivation[recentIndex];

  recentIndex = (recentIndex + 1) % motivation.length;  

    const time = 20000;
    setInterval(next, time);
  
  }  
  
  next()  
  
  }




function aboutMe() {

  me.style.opacity = 1;
  
  main.classList.add ("disable-link")

  me.innerHTML = about ;
  
typeWrite(me)
  
}


linkMe.addEventListener("click",nextMessage );
main.addEventListener("click",  aboutMe );