"use strict";
class Funcionario2 {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    apresentar() {
        console.log("Este é " + this.nome + " e");
    }
}
class Gerente extends Funcionario2 {
    constructor() {
        super("Clayton(gerente)", 15000);
    }
    calcularSalarioMensal() {
        this.salario = (this.salario / 100) * 10 + this.salario;
        return this.salario;
    }
}
class Desenvolvedor extends Funcionario2 {
    constructor() {
        super("Clarynton(desenvolvedor)", 15000);
    }
    calcularSalarioMensal() {
        return this.salario;
    }
}
const Clayton = new Gerente();
Clayton.apresentar();
console.log("o salario do gerente é R$" + Clayton.calcularSalarioMensal() + ".");
const Clarynton = new Desenvolvedor();
Clarynton.apresentar();
console.log("o salario do desenvolvedor é R$" + Clarynton.calcularSalarioMensal() + ".");
