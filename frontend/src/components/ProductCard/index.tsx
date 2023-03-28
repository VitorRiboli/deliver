import "./styles.css";

type Props = {
  name: string;
  imageUri: string;
  price: number;
  description: string;
};

function formatPrice(price : number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  return formatter.format(price);
}


export default function ProductCard({ ...props }: Props) {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">{props.name}</h3>
      <img src={props.imageUri} className="order-card-img" alt="imagem" />
      <h3 className="order-card-price">
        <span>{formatPrice(props.price)}</span>
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
