var n:number = 0;
var cronometro:any = document.getElementById("number");
var iniciarCrono = window.setInterval(function () {
    cronometro.innerHTML = n;
    n++;
}, 1000);

