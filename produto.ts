class Produto{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }

    descrever(){
        return "O produto "+this.nome+" tem o valor de R$ "+this.preco+".";
    }

    desconto(porcentagem:number){
        return "O pruduto " + this.nome + " custa R$" + (this.preco-((this.preco*porcentagem)/100)) + " com desconto";
    }

}

let produto1 = new Produto("Tênis Nike Air Force 1 High '07 LV8 Move Masculino", 899);
let produto2 = new Produto("Galax PLACA DE VIDEO GEFORCE RTX 3050 EX 1-CLICK OC 8GB GDDRD6-35NSL8MD6YEX", 1500);
let produto3 = new Produto("Colher de pau", 40);




console.log(produto1.descrever());
console.log(produto1.desconto(20));

console.log(produto2.descrever());
console.log(produto2.desconto(20));

console.log(produto3.descrever());
console.log(produto3.desconto(20));