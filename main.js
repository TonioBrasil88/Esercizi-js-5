/* ESERCIZIO 1
Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.
double([1, 2, 3]) --> [2, 4, 6]*/

let numbers = [11, 42, 53, 8, 34];

function double(variable) {
    let dobule = variable.map((number) => number * 2);
    return dobule;
}

console.log(double(numbers));

console.log(numbers);


/*ESERCIZIO 2
Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso bello come Charizard).
  Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

(Consiglione .filter( )  )*/


let garage = {

    automobili: [{ marca: `Ferrari`, Modelli: [`EnzoFerrari`, `GT400`] }, { marca: `Laborghini`, Modelli : [`Vitobello`, `GT400`] }],

modelShow: function (marcasel) {

    let show = this.automobili.filter(el => el.marca == marcasel);

    return show;
}

}

console.log(garage.modelShow('Ferrari') [0].Modelli) ;


/*ESERCIZIO 3
Per esercitarvi con gli oggetti...
Seguendo la lezione di stamattina, passo passo con il docente, a vostra scelta, replicare  la rubrica o il bowling.
Valerio Vacca — Oggi alle 14:09*/


let cellulare = { 
    'rubrica' : [ 
        { nome: "Valerio" , "numero" : 4152215444854},
        { nome: "Marcello", "numero" : 878611851357},
        { nome: "Nicola", "numero" : 61876468786544},
    ],

// metodo per chiamare 

'chiama' : function (contatto){
    return this.rubrica.filter ((n)=> n.nome == contatto)[0].numero;
},

}

//  metodo per aggiungere un contatto

'add' : function (contatto){
    this.rubrica = [...this.rubrica , contatto];
 },
 
 // oppure
 
 aggiungi: function (nome, numero){
     let contatto = {};
     contatto.nome = nome;
     contatto.numero = numero;
 
     this.contatti.push(contatto);
 },
 
 // metodo per rimuovere un contatto
 
 'remove' : function (contatto){
    this.rubrica = this.rubrica.filter ((obj)=> obj.nome != contatto);
 }
 
 console.log(cellulare);
 // console.log(cellulare.chiama('Luca'));
 
 
 let oggetto = {nome : 'Francesca' , 'numero' : 3389979000};
 cellulare.add (oggetto);
 cellulare.remove ('Valerio');
 console.log(cellulare);
