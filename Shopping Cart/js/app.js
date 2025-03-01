let totalGeral;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    let preco = quantidade * valorUnitario;

    let listaDeCompras = document.getElementById('lista-produtos');
    listaDeCompras.innerHTML = listaDeCompras.innerHTML + `        
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
      </section>`;

      totalGeral = totalGeral + preco;
      totalGeral.innerHTML = document.getElementById('valor-total').textContent = `R$${totalGeral}`;
      document.getElementById('quantidade').value = '';
}

function limpar (){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$${totalGeral}`;
}