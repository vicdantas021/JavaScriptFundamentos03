const aluno = '{"nome": "Evellyn", "nota": 8}';

const json = JSON.parse(aluno);
console.log(json);
console.log(json.nome)