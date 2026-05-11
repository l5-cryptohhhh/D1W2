
/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nome = 'Manuel';
const cognome = 'Nunziata';

console.log(`Ciao mi chiamo ${nome} ${cognome}`);


/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 10;
let b = 3;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);




/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const annoNascita = 2004;
let annoCorrente = 2026;

console.log(`Ad oggi ho ${annoCorrente - annoNascita} anni`);
console.log(`Tra 10 anni avrò ${annoCorrente - annoNascita + 10} anni `)
console.log(`Cinque anni fa avevo ${annoCorrente - annoNascita - 5} anni `)


/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let etaOggi = 22;
const maggiorEta = etaOggi >= 18;

console.log(`Eta: ${etaOggi} - Maggiorenne: ${maggiorEta}`);


/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = "Manuel";
let anni = 22;
let utenteAttivo = true;
// "typeof null" ritorna "object".
let datiNull = null;
let valoreUnd = undefined; 

console.log(`nome è di tipo: ${typeof name}`);
console.log(`anni è di tipo: ${typeof anni}`);
console.log(`utenteAttivo è di tipo: ${typeof utenteAttivo}`);
console.log(`datiVuoti è di tipo: ${typeof datiNull}`);
console.log(`valoreMancante è di tipo: ${typeof valoreUnd}`);


/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numberNumber = 5;
let numberString = '5';

console.log(numberNumber == numberString);  /*== valuta il tipo O il valore*/
console.log(numberNumber === numberString); /*=== valuta il tipo E il valore, consigliata*/


/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
- '53'
- 2;
- 2;
- 20;
*/

console.log('5' + 3);
console.log('5' - 3);
console.log(true + 1);
console.log('10' * '2');




/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 6
let pari = (n % 2 === 0);
let divisibilePer3 = (n % 3 === 0);
let divisibileEPari = (pari && divisibilePer3);

console.log(`n è pari: ${pari}`);
console.log(`n è divisibile per 3: ${divisibilePer3}`);
console.log(`n è pari e divisibile per 3: ${divisibileEPari}`);


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

