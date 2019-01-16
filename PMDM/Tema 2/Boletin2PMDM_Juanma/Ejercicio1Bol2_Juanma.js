window.onload = function(){
    var input1 = document.getElementById('nota1');
    var input2 = document.getElementById('nota1');
    var input3 = document.getElementById('nota1');
   console.log(input1);
   console.log(input2);
   console.log(input3);
  
//mirar codigo miguel
 document.getElementById('calculo').addEventListener("click", function (){
   
        var divisor = 3;
        var num1 = input1.value;
        var num2 = input2.value;
        var num3 = input3.value;
    console.log(num1);
    console.log(num1);
    console.log(num1);
        suma = (num1+num2+num3);
        console.log(suma);
        result = suma/divisor;
console.log(result);
        alert('La nota media es '+ result);
        
    
})}