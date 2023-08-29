"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.INSS = 11;
        this.IR = 7.5;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    imposto() {
        let valordescontoinss = ((this.salario / 100) * this.INSS);
        let salariocomdescontoinss = this.salario - valordescontoinss;
        let valorinpostoderenda = ((salariocomdescontoinss / 100) * this.IR);
        return valordescontoinss + valorinpostoderenda;
    }
    aumento(aumentos) {
        return "Aumento de " + aumentos + "% aplicado.Novo salario:" + (((this.salario / 100) * aumentos) + this.salario);
    }
    detalheDoFuncionario() {
        let imposto = this.imposto();
        return "Funcionario:" + this.nome + ",cargo:" + this.cargo + ",salario bruto R$" + this.salario + ",imposto:" + imposto + ",salario liquido R$" + (this.salario - imposto);
    }
}
let funcionario = new Funcionario("Ana Silva", " Analista de Vendas", 3000);
let funcionario2 = new Funcionario("Claudio Professor", "Escravista dos alunos SESI", 80000);
console.log(funcionario);
console.log(funcionario.imposto());
console.log(funcionario.aumento(10));
console.log(funcionario.detalheDoFuncionario());
console.log(funcionario2);
console.log(funcionario2.imposto());
console.log(funcionario2.aumento(10));
console.log(funcionario2.detalheDoFuncionario());
