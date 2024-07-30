const Produto = require('./produto')

class Bebidas extends Produto{
    #preco
    constructor(nome, preco, volume, seAlcolico){
        super(nome, preco);
        this.volume = volume;
        this.seAlcolico = seAlcolico;
    }
    ExibirInfo(){
        console.log(`Bebida: ${this.nome}`)
    }
}

const bebida1 = new Bebidas('leite', 6, 500, 'Não alcolico')