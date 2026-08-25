const alunos = [
    {nome: "Sabrina", nota: 9},
    {nome: "Fernanda", nota: 8}
];
alunos.forEach((a) => console.log(`O aluno ${a.nome} recebeu a nota: ${a.nota}`));

for(let i = 0; i <alunos.length; i++){
    console.log(`A aluna ${alunos[i].nome} recebeu a nota: ${alunos[i].nota}`);
}
const json = JSON.stringify(alunos);
console.log(json);