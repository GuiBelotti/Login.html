
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
  const valorHeightAnterior = (parseInt(beforeHeight) == 40) ? 10 : parseInt(beforeHeight) - 30;

  if (!userChange) {
    if (userInput.value && event.target == userInput) {
      retangulo.style.setProperty('--beforeHeight', SomaHeight);
      userChange = true;

    }
  } else {
    if (!userInput.value) {
      retangulo.style.setProperty('--beforeHeight', valorHeightAnterior + "%");
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
      retangulo.style.setProperty('--beforeHeight', valorHeightAnterior + "%");
      passChange = false;
    }
  }

  if (!buttonClick) {
    if (subimitInput.click && event.target == subimitInput) {
      retangulo.style.setProperty('--beforeHeight', SomaHeight);
      buttonClick = true;

      // if (userInput.value == "admin" && passInput.value == "admin") {
      //   subimitInput.style.borderColor = "green";
      //   valorHeightAnterior = 100;
      //   retangulo.style.setProperty('--beforeColor', "rgba(0, 250, 21, 0.521)");
      // } else {
      //   subimitInput.style.borderColor = "red";
      //   valorHeightAnterior = 100;
      //   retangulo.style.setProperty('--beforeColor', "rgba(250, 0, 0)");
      // }

    }
  } else {
    if (!subimitInput.value) {
      retangulo.style.setProperty('--beforeHeight', valorHeightAnterior + "%");
      buttonClick = false;

    }
  }



}

