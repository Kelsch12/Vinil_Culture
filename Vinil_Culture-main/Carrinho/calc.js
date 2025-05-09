document.addEventListener('DOMContentLoaded', function() {
  // 1. PARCELAMENTO INTERATIVO
  const opcoesParcela = document.querySelectorAll('.opcao-parcela');
  
  opcoesParcela.forEach(opcao => {
    opcao.addEventListener('click', function() {
      // Remove seleção anterior
      opcoesParcela.forEach(p => p.classList.remove('ativa'));
      
      // Ativa nova seleção
      this.classList.add('ativa');
      
      // Atualiza display (opcional)
      const numParcelas = parseInt(this.textContent.split('x')[0]);
      console.log(`Parcelas selecionadas: ${numParcelas}`);
    });
  });

  // 2. CÁLCULO AUTOMÁTICO DO TOTAL
  function atualizarTotal() {
    const subtotal = 825; // Valor dos itens
    let frete = 20; // PAC padrão
    
    // Verifica frete selecionado
    const freteSelecionado = document.querySelector('input[name="frete"]:checked');
    if (freteSelecionado.value === 'sedex') frete = 40;
    else if (freteSelecionado.value === 'retirar') frete = 0;
    
    // Aplica desconto
    let desconto = 1;
    const metodoAtivo = document.querySelector('.metodo-pagamento.ativo').dataset.metodo;
    if (metodoAtivo === 'pix') desconto = 0.95;
    else if (metodoAtivo === 'boleto') desconto = 0.97;
    
    // Calcula total
    const total = (subtotal + frete) * desconto;
    document.querySelector('.valor-total').textContent = `R$${total.toFixed(2)}`;
  }

  // 3. EVENT LISTENERS
  document.querySelectorAll('input[name="frete"]').forEach(radio => {
    radio.addEventListener('change', atualizarTotal);
  });
  
  document.querySelectorAll('.metodo-pagamento').forEach(metodo => {
    metodo.addEventListener('click', function() {
      document.querySelector('.metodo-pagamento.ativo').classList.remove('ativo');
      this.classList.add('ativo');
      atualizarTotal();
    });
  });
});