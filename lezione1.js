// Tipi di variabile

//VAR
var colore = "rosso";
var colore = "blu";  // è possibile riassegnare il valore, sono accessibili globalmente e richiamate dopo l'assegnazione daranno semplicemente undefined

// LET
let nome = "Mario";
nome = "Luigi";  // è possibile riassegnare il valore, sono accessibili nello stesso blocco e solo dopo l'assegnazione

//CONST
const numero = 3.14;
// numero = 3.15; // Questo darà un errore dal  momento che non posso riassegnare il valore



//Tipi di dato

//Numeri
let tipoNumero = 2;

//Stringhe
let tipoStringa = "Mario";

//Booleani
let tipoBooleanTrue = true;
let tipoBooleanFalse = false;

//Undefined
let x;   //undefined è una variabile che è stata dichiarata ma non ha ancora un valore

//Null

let y = null // null è l'assenza intenzionale di qualsiasi valore

//Conversione tra i Tipi

let num = 1;
let numToStr = String(num);  // mi restituisce una stringa "1"

let str = "23";
let strToNum = Number(str);  // mi restituisce un numero 23

let t = Boolean(1);  // mi restituisce un booleano true
let f = Boolean(0);  // mi restituisce un booleano false

let sumByType = "5" + 1;  // restituisce una stringa "51"
let operationByType = "5" - 1;  // restituisce un numero 4 


//Operatori di Confronto

// UGUAGLIANZA
5 == "5";  // UGUAGLIANZA: restituisce true perchè esegue automaticamente la traduzione a numero e quindi hanno lo stesso valore

// UGUAGLIANZA STRETTA
5 === "5";  // restituisce false perchè i tipi sono diversi

//DISUGUAGLIANZA
5 != "5";  // restituisce false perchè esegue automaticamente la traduzione a numero e quindi non hanno lo stesso valore

//DISUGUAGLIANZA STRETTA
5 !== "5";  // restituisce true perchè i tipi sono diversi


10 > 5; //MAGGIORE ; Restituisce true
10 >= 10 //MAGGIORE UGUAlE ; Restituisce true
5 < 10 //MINORE ; Restituisce true
5 <= 4 //MINORE UGUALE ; Restituisce false

//Stampare in Console

console.log(2+5) //stampa 7
console.log(str) //stampa il valore della variabile str, se esiste
console.log("Ciao, sono " + tipoStringa) //stampa la stringa Ciao, sono Mario **Attenzione agli spazi!!**