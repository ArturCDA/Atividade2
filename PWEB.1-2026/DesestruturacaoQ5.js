const alunos = [
    { nome: "Ana", curso: "TSI" },
    { nome: "Bruno", curso: "Redes" },
    { nome: "Carla", curso: "Analise de dados" },
];

// desestrutura 'nome' e 'curso' diretamente no parâmetro da arrow function
const formatados = alunos.map(({ nome, curso }) => `${nome} - ${curso}`);

console.log(formatados);