const alunos = [
    {nome: "Victória", nota: 10},
    {nome: "Evellyn", nota: 9},
    {nome: "Yuri", nota: 3},
]

const aprovados = alunos.filter((aluno) => aluno.nota >= 7)

console.log(aprovados);
