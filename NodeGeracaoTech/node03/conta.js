class Conta {
    #senha;
    #LimitEmprestimo;
    #TemEmprestimo;
    #saldo;

    constructor(titular, agencia, conta, saldo, senha, LimitEmprestimo, TemEmprestimo) {
        this.titular = titular;
        this.agencia = agencia;
        this.conta = conta;
        this.#saldo = saldo;
        this.#senha = senha;
        this.#LimitEmprestimo = LimitEmprestimo;
        this.#TemEmprestimo = TemEmprestimo;
    }

    verSaldo() {
        return this.#saldo;
    }

    sacar(valor) {
        if (valor = 500 && valor <= this.#saldo) {
            this.#saldo - valor;
            return console.log(`Saque realizado com sucesso!, seu saldo agora é de ${this.#saldo - valor}`); 
        }
        else{
            return console.log(`Valor de saque não pode ultrapassar o total de ${this.saldo}!`); 
        }
        
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return true;
        }
        return false; 
    }
}

const conta1 = new Conta('Cleitinho', 66, 777, 15000, 1234, 5000, 'disponivel');
console.log(`Saldo atual:  R$${conta1.verSaldo()}`);


conta1.depositar(2000);
console.log(`Seu saldo agora é de: ${conta1.verSaldo()}`);


conta1.sacar(5000);
console.log(`Empréstimo foi aprovado! Seu saldo agora é de: R$${conta1.verSaldo()}`);
