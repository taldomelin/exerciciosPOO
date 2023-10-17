"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "Segunda Feira";
    DiasDaSemana["Ter\u00E7a"] = "Ter\u00E7a Feira";
    DiasDaSemana["Quarta"] = "Quara Feira";
    DiasDaSemana["Quinta"] = "Qunita Feira";
    DiasDaSemana["Sexta"] = "Sexta Feira";
    DiasDaSemana["S\u00E1bado"] = "Sabado";
    DiasDaSemana["Domingo"] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.Sexta;
//console.log ("Hoje é " + DiasDaSemana[diaHoje]);
console.log("Hoje é " + diaHoje);
