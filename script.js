function typeWrite(elemento) {

  const textoArray = elemento.innerHTML.split('');

  elemento.innerHTML = ' ';

  textoArray.forEach(function (letra, i) {

    setTimeout(function () {

      elemento.innerHTML += letra;
    }, 75 * i)

  });
}


const me = document.querySelector("#me")
const takes = document.querySelector("#takes")
const more = document.querySelector("#more")
let index = 0;


function nextMessage() {

  takes.style.opacity = 1

  me.style.opacity = 0

  if (index < motivation.length) {

    takes.innerHTML = motivation[index];
    index++;

    setTimeout(nextMessage, 15000);

  }

}


function aboutMe() {

  me.style.opacity = 1
  takes.style.opacity = 0

  typeWrite(me)

}

