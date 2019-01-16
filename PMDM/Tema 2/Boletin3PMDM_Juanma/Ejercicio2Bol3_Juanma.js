window.onload = function(){
    var operador1 = document.getElementById('numero1');
    var operador2 = document.getElementById('numero2');
    var operacion = document.getElementById('operando');
    var boton = document.getElementById('boton');
    
    boton.onclick = () =>{
            var num1 = operador1.value;
            var num2 = operador2.value;
            var result;
            var operando = operacion.options[operacion.selectedIndex].value;
            console.log(operando)


            if(operando == '+'){

            
                result = num1+num2;
                console.log(result);
                alert(result);

            }else if(operando == '-'){

                result = num1-num2;
                alert(result);

            }else if(operando == '*'){
                result = num1*num2;
                alert(result);
            }else if(operando == '/'){
                result = num1/num2;
                alert(result);
            }
                    

    };

}