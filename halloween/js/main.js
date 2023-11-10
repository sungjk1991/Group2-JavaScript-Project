var main = document.getElementById("main-outer");
var mainHTML = main.innerHTML;
var html = "<div class=\"text-center\" id= \"scaryDiv\"><img src=\"assets/scary.jpg\" class=\"img-fluid\" alt=\"scary\" id= \"scary\"></div>";
var audio = new Audio('assets/scream.mp3');

function scaryFunction() {
    document.getElementById("main-outer").innerHTML = html;
    document.getElementById("body").style.backgroundColor = "red"
    document.getElementById("body").style.backgroundImage = 'none'
    document.getElementById("scary").addEventListener("click", scaryFunction2);
    audio.play();
  }

function scaryFunction2() {
    document.getElementById("main-outer").innerHTML = mainHTML;
    document.getElementById("body").style.backgroundColor = "rgb(227, 229, 221)"
    document.getElementById("body").style.backgroundImage = "url(assets/backg.png)"
    audio.pause();
  }

