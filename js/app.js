function adicionar() {
   //recuperar valores nome do produto, valor e quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade.value);
    let preco = quantidade.value * valorUnitario;
    alert(preco);


   //calcular o preço, subtotal
   //adicionar no carrinho
   //atualizar o valor total
}


function limpar() {
    
}