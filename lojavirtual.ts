class ProdutoLoja{
    nome: string;
    preco: number;

    constructor(nome:string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
}

class CarrinhoDeCompras{
    produtosDaLoja: ProdutoLoja[] = [];

    constructor(){
    }

    adicionarProduto(produtos:ProdutoLoja){
        this.produtosDaLoja.push(produtos);
    }
    removerProduto(produtos:ProdutoLoja){
        this.produtosDaLoja = this.produtosDaLoja.filter((item)=>item.nome !==produtos.nome)
    }
    somaDosProdutos(){
        let soma = 0 
        for (let i = 0; i < this.produtosDaLoja.length; i++) {

            soma = this.produtosDaLoja[i].preco + soma;
        }
        return "A soma dos produtos é";
       
    }
    visualizar(){
        console.log
    }
}
const produtos1 = new ProdutoLoja("iphone", 13000)

const meuProduto = new CarrinhoDeCompras();
meuProduto.adicionarProduto(produto1)
console.log(meuProduto)