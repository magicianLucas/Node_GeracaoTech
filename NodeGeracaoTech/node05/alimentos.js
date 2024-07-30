const Alimentos = require('./produto')

class Alimentos extends Produto{
    #preco
    constructor(nome, preco, peso, sePerecivil){
        super(nome, preco)
        this.peso = peso
        this.sePerecivil = sePerecivil
    }
    ExibirInfo(){
        
    }

}