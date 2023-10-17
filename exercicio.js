"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando preparo";
    StatusPedido["EmPreparo"] = "Em preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu para entrega";
    StatusPedido["Enregue"] = "Entregue";
    StatusPedido["ClienteAusente"] = "Cliente n\u00E3o encontrado.";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.pedidos = [];
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adicionada com sucesso!!!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        console.log("Produtos pedido:");
        for (let index = 0; index < this.produtos.length; index++) {
            console.log("Produtos :" + this.produtos[index].nome + "R$ " + this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("X-Tudo", 35);
const outroProdutoPedido = new ProdutoPedido("X-Frango", 20);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Status atual do pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.ClienteAusente);
console.log("Status atual do Pedido: " + novoPedido.exibirStatus());
console.log("Produtos do pedido: " + novoPedido.exibirProdutosDoPedido());
novoPedido.exibirProdutosDoPedido();
