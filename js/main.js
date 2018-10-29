/*
 Respecter la case minuscule Majuscule Miniscule lors de la réalisation 
 des noms de variable. 

 Pour afficher dans la console : console.log(nomDeTaVariable);

 Pour faire une virgule dans les chiffres mettre les points et non une virgule 
 console.log( 223.3 + 3);

 */
var motDePasse = 1234;

console.log(222 * 3);
console.log(motDePasse);

console.log(233.3 + 3);

console.log(1 / 2 + 2 * 5);
console.log( 1 / (2 + 2) * 5);
/* Mettre des parenthèses dans ton calcule si tu souhaites un ordre de priorité.
  Exemple : console.log( 2 * 4 + 3 ) console.log affichera 11. L'ordre des 
  priorités : Multiplication Divisions Soustraction Additions. La Multiplication 
  et la division sont identique en priorité tout comme la Soustraction et l'Addition.
*/

/* Le modulo console.log(1 % 2); aide a donner le reste et à definir si le nombre est
impair ou pair. */

var num= 0;

/* Num++ j'incrémente le résulta final en faisant juste num++ si je faisais 
num-- je décrémente de -1  */

num += 5 * 3; 
/* L'assignement c'est ajouter un signe operatoire avec un egale += composé : est là pour faire une combinaison deux en un comme une 
une lessive.*/

console.log(num);

/* Chaine de carateres */

var message = "Coucou \Antho";
// Mettre un double quotes toujours quand tu fais des chaines de caractères.
// Le bascklash est important pour ajouter du texte et le mettre à ligne.
console.log(message);

// Concaténé une chaine de caractère

var salut = "Salut";
var name = "Martin";
salut += " " + name;

console.log(salut);


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

// var name = "Marise"
// var age = "30"

// var stats = ["attacks", "défense"];
// var array = [name, age, stats];

// array[0]= "Martin"; 
// array[2][1] = "bouclier";

// console.log(array[2]);

// var arr = [1, 2, 3];

// arr.push("Je bosse du Js");
// //.push est une méthode pour ajouter des éléments dans un tableau déja créer. 

// arr.pop();
// // .pop est une méthode qui supprime la dernière entrée dans le tableau

// var pop = arr.pop();
// //.pop peut etre mis dans une variable afin de réutiliser la methode donc de sauvegarder la valeur et de l'ajouter à nouveau.

// arr.push(pop);
// //.push(pop) ajoute la valeur dans le tableau à nouveau.

// console.log(arr);
// console.log(pop);

// Version Mike
// var firstName = "Mike";
// var name = "Ketfi";
// var resultat = [ firstName, name];

// resultat.push("MK");

// console.log(resultat);


// Version Cours

var firstName = "Mike";
var name = "Ketfi";
var initiale = firstName[0] + name [0];

var resultat = [];

resultat.push(firstName);
resultat.push(name);
resultat.push(initiale);

console.log(resultat);