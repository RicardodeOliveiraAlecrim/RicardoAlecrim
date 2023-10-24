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







window.onload = motivation()

function motivation (){

let phrases 
let take = 0
  
phrases = setInterval(function () {

 
  takes.innerHTML = take
  }, 6000)

}




function aboutMe() {

  me.innerHTML = ('Nascido em 1992, e raizes fundadas no interior de São Paulo/Piracicaba, eis que nasce um garoto sonhador que acredita que se não desistir pode alcançar o que  almeja, nessa longa jornada apresento á vocês um pouco do trabalho e projetos alcançados pelas garras da determinação de alcançar seu destino.')
  
  more.innerHTML =('Ver mais...')

  more.style.padding = "2px"


console.log(motivacional)
  
}


