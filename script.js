function typeWrite(elemento){

  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   

  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 75 * i)

});
}




const me = document.querySelector("#me")
const takes = document.querySelector("#takes")
const more = document.querySelector("#more")
let index = 0

                                





window.onload = message()



function message(){
  if (index < motivation.lenght) {
    takes.innerHTML = motivation[index]
    index++;
  } else {
    clearInterval(interval)
  }
}

let interval = setInterval(message, 500)

console.log(setInterval)

function aboutMe() {

 me.innerHTML = ('Nascido em 1992, e raizes fundadas no interior de Piracicaba/SP, lhe apresento um garoto sonhador que acredita que se não desistir pode alcançar o que  almeja, atualmente entre estudos e trabalho, nessa longa jornada apresento á vocês um pouco das criações e projetos alcançados pelas garras da determinação de alcançar seu destino.')
  
  more.innerHTML =('Ver mais...')

  more.style.padding = "2px"
  
}
