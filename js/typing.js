const typing = document.getElementById('developer');

const hiTyping = document.getElementById('hi');

const typingDeveloper = (text, time, etiqueta) => {
  let arrayString = text.split('')
  etiqueta.innerHTML = ''
  let i = 0;
  // intervalo
  let write = setInterval(function () {
    etiqueta.innerHTML += arrayString[i]
    i++;
    if (i === arrayString.length + 1) {
      i = 0;
      etiqueta.innerHTML = '';
    }
  }, time)
}

typingDeveloper("Developer", 200, typing);
typingDeveloper("Hi!", 400, hiTyping);