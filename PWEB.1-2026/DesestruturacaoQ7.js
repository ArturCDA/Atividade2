// desestruturação direta na assinatura da função
function CardItem({ titulo, preco }) {
    return (
        `
    	<div>
      		<h3>${titulo}</h3>
      		<p>R$ ${preco}</p>
      		<button> Comprar </button>
    	</div>
        `
    );
}