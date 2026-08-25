class Funcionario{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }
}

class Professor extends Funcionario{
    constructor(nome, salario, disciplina){
        super(nome, salario);
        this.disciplina = disciplina;
    }
}

const professor = new Professor ("Valdir", 5000, "História");
console.log(professor);