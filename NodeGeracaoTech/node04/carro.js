const Veiculo = require('NodeGeracaoTech/node04/veiculos.js')

class Carro extends Veiculo{
    constructor(marca, modelo, anoFabricacao, preco, infos, qtdPorta, tipoCombustivel){
        super(marca, modelo, anoFabricacao, preco, infos )
        this.qtdPorta = qtdPorta
        this.tipoCombustivel= tipoCombustivel
    }
}