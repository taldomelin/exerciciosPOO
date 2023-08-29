class ContaBancaria{
    nome: string;
    saldo: number;

    constructor(nome: string, saldo: number){
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(deposito:number){
        this.saldo = this.saldo + deposito;
   return "Meu nome é "+ this.nome + " e meu novo saldo é R$"+ this.saldo + " após o deposito";
    }

    consultar(){
    return "Meu nome é "+ this.nome + " e o saldo da minha conta é de R$ "+ this.saldo + ".";
    }

    sacar(saque:number){
        this.saldo = this.saldo-saque;
        return "Meu nome é "+ this.nome + " e meu novo saldo é R$"+this.saldo+" após o saque";
    }

    novosaque(saque:number){
        this.saldo = this.saldo-saque;
        return "Meu novo saldo é R$" + this.saldo + " após o saque";
    }

}

let minhaconta = new ContaBancaria("João", 1000);

console.log(minhaconta.consultar());
console.log(minhaconta.depositar(500));
console.log(minhaconta.consultar());
console.log(minhaconta.sacar(200));
console.log(minhaconta.consultar());
console.log(minhaconta.novosaque(1500));
console.log(minhaconta.consultar());

let minhaconta2 = new ContaBancaria("Taldo", 10000);

console.log(minhaconta2.consultar());
console.log(minhaconta2.depositar(500));
console.log(minhaconta2.consultar());
console.log(minhaconta2.sacar(200));
console.log(minhaconta2.consultar());
console.log(minhaconta2.novosaque(1500));
console.log(minhaconta2.consultar());

let minhaconta3 = new ContaBancaria("Ribamar", 99999);

console.log(minhaconta3.consultar());
console.log(minhaconta3.depositar(500));
console.log(minhaconta3.consultar());
console.log(minhaconta3.sacar(200));
console.log(minhaconta3.consultar());
console.log(minhaconta3.novosaque(1500));
console.log(minhaconta3.consultar());