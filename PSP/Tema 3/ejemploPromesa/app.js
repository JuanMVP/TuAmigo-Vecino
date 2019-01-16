/*let promesa = new Promise((res,rej)=>{
    rej('Error');
});

let promesa2 = new Promise((res,rej)=>{
    //hago la acción
    //si tengo exito
    let valor= "Hola Mundo!";
    res(valor);

    //si hay algun error
    rej(new Error('Error'));
});

promesa2
    .then((resultado)=>{console.log(resultado);})
    .catch((error) => {console.log(error);});*/

    /*const promise = new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 10);
    
        setTimeout(
            () => number > 5
                ? resolve(number)
                : reject(new Error('Menor a 5')),
            1000
        );
    });
    
    promise
        .then(number => console.log(number))
        .catch(error => console.error(error));*/


const fetch = require('node-fetch');

let promesa3= fetch('https://jsonplaceholder.typicode.com/todos/1');

promesa3.then((res) => {
    console.log(res);
}).then((json)=> {
    console.log(json);
});