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