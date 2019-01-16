window.onload=function(){
    
var input1= document.getElementById('cls');
var input2= document.getElementById('fh');
var botonF = document.getElementById('conversion1');
var botonC = document.getElementById('boton2');

botonF.addEventListener('click', () => {

        var gradosC = input1.value;
        

        let result = (gradosC * 1.8)+32;

    alert(result);

})

botonC.addEventListener('click',() => {
    var gradosF = input2.value;

    let result = (gradosF-32)/1.8;

    alert(result);
})


}