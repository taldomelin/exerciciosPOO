"use strict";
class Estudante {
    constructor(estudante, idade, notas) {
        this.estudante = estudante;
        this.idade = idade;
        this.notas = notas;
    }
    maiorquesete() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        const media = soma / this.notas.length;
        if (media < 7) {
            return this.estudante + ", sua média é " + media + "  e você precisa estudar mais para melhorar seu desempenho. ";
        }
        return "Parabéns, " + this.estudante + " Sua média é " + media + " e você está aprovado(a).";
    }
}
let estudante = new Estudante("Maria", 20, [8, 7.5, 9.2, 6.8, 9.5]);
console.log(estudante.maiorquesete());
