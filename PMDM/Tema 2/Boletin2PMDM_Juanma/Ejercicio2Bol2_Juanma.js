window.onload = function () { 

    var lista= document.getElementById('listaCoches');

    var seleccionado = lista.selectedIndex;
    console.log(seleccionado)

    var contenido = lista.options[seleccionado].value;
    console.log(contenido);

    if(seleccionado==0){
        alert('Descuento del 5%');
    }else{
        alert('Descuento del 10%');
    }



 }