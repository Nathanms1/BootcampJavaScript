//var y = 0 ; - atalho CTRL+/

/* comentario extenso
varias linhas
*/

// var y = 1; 
// var z = 2;
// var x = 0; 
// const PRECO = 2; //quando é constante, o valor nao pode ser manipulado

// function soma (y, z) {
//     return y + z;
//     console.log(y + z);
// }

// soma(3, 5);

//console.log("Hello world!");

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0) {
        evenNums.push(array[i]);

    }
  }
 console.log('Os numeros pares são: ' + evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);