"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtosDaLoja = [];
    }
    adicionarProduto(produtos) {
        this.produtosDaLoja.push(produtos);
    }
    removerProduto(produtos) {
        this.produtosDaLoja = this.produtosDaLoja.filter((item) => item.nome !== produtos.nome);
        return "Produto removido";
    }
    somaDosProdutos() {
        let soma = 0;
        for (let i = 0; i < this.produtosDaLoja.length; i++) {
            soma = this.produtosDaLoja[i].preco + soma;
        }
        return "A soma dos produtos é:" + soma;
    }
    visualizar() {
        console.log("Os produtos são");
        for (let i = 0; i < this.produtosDaLoja.length; i++) {
            console.log(this.produtosDaLoja[i].nome + " com o valor de R$" + this.produtosDaLoja[i].preco + " Produto adicionado com sucesso.");
        }
    }
}
class loja {
}
const produtos1 = new ProdutoLoja("iphone", 13000);
const produtos2 = new ProdutoLoja("Galaxy S2", 5130);
const meuProduto = new CarrinhoDeCompras();
meuProduto.adicionarProduto(produtos1);
meuProduto.adicionarProduto(produtos2);
console.log(meuProduto.visualizar());
console.log(meuProduto.somaDosProdutos());
console.log(meuProduto.removerProduto(produtos1));
console.log(meuProduto.visualizar());
console.log(meuProduto.somaDosProdutos());
