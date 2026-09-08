const usuario = {
    nome: "Pedro",
    endereco: {
        rua: "Av. Brasil",
        cidade: "João Pessoa",
        estado: "PB",
    },
};

const { endereco: { cidade, estado } } = usuario;

console.log(cidade, estado);