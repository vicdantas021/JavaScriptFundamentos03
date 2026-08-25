class Produto{
    constructor(preco, nome){
        this.preco = preco,
        this.nome = nome
    }
    aplicarDesconto(percentual){
        this.preco -= this.preco * (percentual/100)
    }
}

const produto = new Produto(100, "Teclado")
const produto1 = new Produto(80, "Mouse")
console.log(produto1)
produto.aplicarDesconto(10);
console.log(produto)