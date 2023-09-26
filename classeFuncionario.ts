abstract class Funcionario2{
    private nome:string;
    protected salario:number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularSalarioMensal(): number;

    apresentar(): void{
        console.log("Este é " + this.nome + " e")
    }
}

class Gerente extends Funcionario2{
    constructor(){
        super("Clayton(gerente)", 15000)
    }

    calcularSalarioMensal(): number {
        this.salario = (this.salario/100)*10 + this.salario;
        return this.salario
    }
}

class Desenvolvedor extends Funcionario2{
    constructor(){
        super("Clarynton(desenvolvedor)", 15000);
    }

    calcularSalarioMensal(): number {
        return this.salario
    }
}

const Clayton = new Gerente();
Clayton.apresentar();
console.log("o salario do gerente é R$" + Clayton.calcularSalarioMensal() + ".");

const Clarynton = new Desenvolvedor();
Clarynton.apresentar();
console.log("o salario do desenvolvedor é R$" + Clarynton.calcularSalarioMensal()+ ".");

