class Veiculo{
    constructor(marca, modelo, anoFabricacao, preco, infos){
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.preco = preco;
        this.infos = infos;
    }

    exibirInfos(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, ano: ${this.anoFabricacao}, Preço: ${this.preco}`);
    }
   
}

// class Carro extends Veiculo{
//     constructor(marca, modelo, anoFabricacao, preco, infos, qtdPorta, tipoCombustivel){
//         super(marca, modelo, anoFabricacao, preco, infos )
//         this.qtdPorta = qtdPorta
//         this.tipoCombustivel= tipoCombustivel
//     }
// }

// class Moto extends Veiculo{
//     constructor(marca, modelo, anoFabricacao, preco, infos, cilindrada, tipoPartida){
//         super(marca, modelo, anoFabricacao, preco, infos)
//         this.cilindrada = cilindrada;
//         this.tipoPartida = tipoPartida;
//     }
// }

const carro1 = new Carro ('Fusquinha', 'Bonitin', 1960, 10000, 'Carrinho fusca de palhaço', 3, 'Gasosa')
console.log(carro1)
const moto1 = new Moto ('Vasourra', 'Nimbus 2000', 2000, 1345, 'Vassoura Harry Potter', 'não sei', 'veloz')
console.log(moto1)