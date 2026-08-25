const respotaAPI = `[
    {"id":1, "nome": "Julia"},
    {"id":2, "nome": "Emanuele"}
]`

const usuarios = JSON.parse(respotaAPI)

usuarios.forEach(aluno => {
    console.log(aluno.nome)
});