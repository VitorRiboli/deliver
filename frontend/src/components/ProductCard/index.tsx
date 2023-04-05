import { Product } from "../../utils/types";
import "./styles.css";

type Props = {
  product: Product;
  onSelectProduct: (product : Product) => void;
  isSelected: boolean;
};

function formatPrice(price : number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  return formatter.format(price);
}


export default function ProductCard({ onSelectProduct, product, isSelected }: Props) {
  return (
    <div 
      className={`order-card-container ${isSelected ? "selected" : ""}`}
      onClick={() => onSelectProduct(product)}
    >
      <h3 className="order-card-title">{product.name}</h3>
      <img src={product.imageUri} className="order-card-img" alt="imagem" />
      <h3 className="order-card-price">
        <span>{formatPrice(product.price)}</span>
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
