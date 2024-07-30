// import da classe animal

import Animal from './animal'

class AnimaisVoadores extends Animal{
    constructor(especie, tamanho,cor, nome, qtdAsas){
        super(especie, tamanho,cor, nome)
        this.qtdAsas = qtdAsas
    }

    voar(){
        console.log(`O animal ${this.getNome()} voou`)
    }
}

// class AnimaisNadadores extends Animal{
//     constructor(especie, tamanho,cor, nome){
//         super(especie, tamanho,cor, nome)
      
//     }

//     nadar(){
//         console.log(`O animal ${this.getNome()} voou`)
//     }

// }

class AnimalQueVoaAnda extends AnimaisVoadores{
    constructor(especie, tamanho,cor, nome, qtdAsas, ){
        super(especie, tamanho,cor, nome, qtdAsas)

    }
    andar(){
        console.log(`O animal ${this.getNome()} andou`)
    }
}

class VoaNadaAnda extends AnimalQueVoaAnda{
    constructor(especie, tamanho,cor, nome, qtdAsas){
        super(especie, tamanho,cor, nome, qtdAsas)
    
    }
    nadar(){
        console.log(`O animal ${this.getNome()} andou`)

    }
}

const animal1 = new VoaNadaAnda ('Pato', 'Pequno', 'Preto', 'Patolino', 2)
console.log(animal1)
animal1.voar()
animal1.nadar()
animal1.andar()
animal1.falar()
animal1.comer()
const animal2 = new AnimaisVoadores ('Borboleta', 'Pequno', 'Laranja', 'Poti Poti', 4)
console.log(animal2)
animal2.voar()
const animal3 = new AnimalQueVoaAnda ('Pombo', 'Pequno', 'cinza', 'Osvaldo', 2)
console.log(animal3)
animal3.voar()
animal3.andar()
animal3.falar()
animal3.comer()