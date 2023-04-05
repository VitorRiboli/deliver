type Props = {
  amount: number;
  totalPrice: number;
}

function formatPrice(price : number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  return formatter.format(price);
}

export default function OrderSummary( {amount, totalPrice} : Props) {
  return (
    <main className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected">{amount}</strong>
            PEDIDOS SELECIONADOS
          </span>
          <span className="order-summary-total">
            <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
            VALOR TOTAL
          </span>
        </div>
        <button className="order-summary-make-order">FAZER PEDIDO</button>
      </div>
    </main>
  );
}
