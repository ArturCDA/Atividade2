const produto = { nomeProduto: "Teclado", preco: 150 };

const { nomeProduto: nome, estoque: quantidade = 0 } = produto;

console.log(nome, quantidade);