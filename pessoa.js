"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let msgHabilitacao = "já posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitacao = "Não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + "e tenho" + this.idade + "anos e" + msgHabilitacao + ".";
    }
    comidasFavoritas() {
        console.log("Minha(s) comida(s) favorita(s) ");
        for (let i = 0; i <= this.comidas.length; i++)
            console.log(this.comidas[i]);
    }
}
let pessoa1 = new Pessoa("João", 17, ["doguinho", "Macarrão com Frango", "Pizza"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
