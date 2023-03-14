/*dos tipos de clientes donde su promedio de tiempo en llegar es de 5 a 11 minutos
cliente a (que son profesores) 2 a 6 mins*
cliente b (estudiantes) 3 a 7 mins */

let ClientesTotales = new Array(200);
const MaxMinsProfes = 6;
const MinMinsAlmunos = 2;
ClientesTotales[145] = 4;
const CantProfes = ClientesTotales.length * .65;
for(let i = 0; i < CantProfes; i++){
    ClientesTotales[i] = Math.floor(Math.random() * (MaxMinsProfes - MinMinsAlmunos) + MinMinsAlmunos)
}
console.log(ClientesTotales);
