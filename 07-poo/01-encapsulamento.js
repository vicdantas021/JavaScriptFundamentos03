class ContaBancaria{
    #saldo = 0;

    depositar(valor){
        if(valor >0) this.#saldo += valor;
    }

    consultaSaldo(){
        return this.#saldo;
    }
}

const contaLulu = new ContaBancaria();
contaLulu.depositar(100);
console.log(contaLulu.consultaSaldo());