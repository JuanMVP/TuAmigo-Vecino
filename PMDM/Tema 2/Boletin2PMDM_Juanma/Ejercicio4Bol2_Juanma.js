window.onload = function(){
    var numMes = document.getElementById('numeroMes');
    

    

    document.getElementById('comprobar').addEventListener('click', function(){

        var contenido = numeroMes.value;
        console.log(contenido);

    if((contenido==1) || (contenido==3) || (contenido==5) || (contenido==7) || (contenido==8) || (contenido==10) || (contenido==12)){
        alert('El mes tiene 31 días');
    }else if ((contenido==4) ||(contenido==6) ||(contenido==9) ||(contenido==11))
        alert('El mes tiene 30 días');
    else if(contenido ==2)
        alert('El mes tiene 28 o 29 días')
    else(contenido>12)
        alert('El numero introducido no puede ser mayor que 12');
    
        
   
})}
