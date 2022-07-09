// variables

var a; //declarando
var b = 'b'; // Declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global scope

var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries() {
    countrie = 'colombia'; // global
    console.log(countrie);
}

countries();
console.log(countrie);