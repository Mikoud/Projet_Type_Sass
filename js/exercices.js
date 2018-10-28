// var name =" Laurianne ";
// var age = 34;

// var resultat =" Bonjour " + name + " tu as " + age + " ! ";

// console.log(resultat);

// .length calcule le nombe de caractère. On part toujours de 0. 

// var name = "Laurianne";

// name [name.length - 1 ] = "a"

// name = "Laurianna"; 

// console.log(name);
/*
En javacript les chaines de caractères sont immutable elle ne peuvent être changée.
Changement de lettre par une autre.
*/

var name = "Marise"
var age = "30"

var stats = ["attacks", "défense"];
var array = [name, age, stats];

array[0]= "Martin"; 
array[2][1] = "bouclier";

console.log(array[2]);
