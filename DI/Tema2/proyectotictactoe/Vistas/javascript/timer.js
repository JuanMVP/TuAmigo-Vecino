var n = 0;
var cronometro = document.getElementById("number");
var iniciarCrono = window.setInterval(function () {
    cronometro.innerHTML = n;
    n++;
}, 1000);
