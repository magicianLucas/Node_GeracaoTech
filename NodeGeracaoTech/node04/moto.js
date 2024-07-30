const Veiculo = require('NodeGeracaoTech/node04/veiculos.js')

class Moto extends Veiculo{
    constructor(marca, modelo, anoFabricacao, preco, infos, cilindrada, tipoPartida){
        super(marca, modelo, anoFabricacao, preco, infos)
        this.cilindrada = cilindrada;
        this.tipoPartida = tipoPartida;
    }
}