enum StatusPedido{
AguardandoPreparo = "Aguardando preparo",
EmPreparo = "Em preparo",
SaiuParaEntrega = "Saiu para entrega",
Enregue = "Entregue",
ClienteAusente = "Cliente não encontrado."
}

class ProdutoPedido{
    nome : string;
    valor : number;
    

    constructor(nome:string, valor:number){
        this.nome = nome;
        this.valor = valor;
    }
}

class Pedido{
    private produtos:ProdutoPedido[];
    private status:StatusPedido;

    constructor(){
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }

    pedidos : Pedido [] = [];

    adicionarProduto(produto:ProdutoPedido){
        this.produtos.push(produto);
        return "Produto adicionada com sucesso!!!"
    }

    atualizarStatus(status: StatusPedido){
        this.status = status;
    }

    exibirStatus(){
        return this.status;
    }

    exibirProdutosDoPedido(){
        console.log("Produtos pedido:");
        for (let index = 0; index < this.produtos.length; index ++){
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
