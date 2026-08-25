class Aluno {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    };
    apresentar(){
         console.log(`Nome: ${this.nome} - Idade: ${this.idade}`)
    }
}

const aluno = new Aluno("Laurinha", 2);
aluno.apresentar();