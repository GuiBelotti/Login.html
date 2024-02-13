
const userInput = document.getElementById('username');
const passInput = document.getElementById('password');
const subimitInput = document.getElementById('submit');
const retangulo = document.getElementById('retangulo');
var userChange = false;
var passChange = false;
var buttonClick = false;


function BgColor(event) {

  const beforeHeight = getComputedStyle(retangulo).getPropertyValue('--beforeHeight');
  const SomaHeight = parseInt(beforeHeight) + 30 + "%";
  var valorHeightAnterior = (parseInt(beforeHeight) == 30) ? 10 : parseInt(beforeHeight) - 30;
  var valorHeightAtual = (valorHeightAnterior < 30) ? 10 : valorHeightAnterior;

  if (!userChange) {
    if (userInput.value && event.target == userInput) {
      retangulo.style.setProperty('--beforeHeight', SomaHeight);
      userChange = true;

    }
  } else {
    if (!userInput.value) {
      retangulo.style.setProperty('--beforeHeight', valorHeightAtual + "%");
      userChange = false;
    }
  }

  if (!passChange) {
    if (passInput.value && event.target == passInput) {
      retangulo.style.setProperty('--beforeHeight', SomaHeight);
      passChange = true;

    }
  } else {
    if (!passInput.value) {
      retangulo.style.setProperty('--beforeHeight', valorHeightAtual + "%");
      passChange = false;
    }
  }

  if (!buttonClick) {
    if (subimitInput.click && event.target == subimitInput) {
      retangulo.style.setProperty('--beforeHeight', SomaHeight);

      if (userInput.value == "admin" && passInput.value == "admin") {
        subimitInput.style.borderColor = "green";
        userInput.style.borderColor = "green";
        passInput.style.borderColor = "green";
        valorHeightAnterior = 100;
        retangulo.style.setProperty('--beforeColor', "rgba(0, 250, 21, 0.521)");
      }
      else {
        userChange = false;
        passChange = false;
        subimitInput.style.borderColor = "red";
        userInput.style.borderColor = "red";
        passInput.style.borderColor = "red";
        retangulo.style.setProperty('--beforeHeight', "20%");
        retangulo.style.setProperty('--beforeColor', "#fa0000");

        setTimeout(() => {
          retangulo.style.setProperty('--beforeColor', "#601C8D");
        }, 1000);

        userInput.value = "";
        passInput.value = "";
      }
    }
  }


}




