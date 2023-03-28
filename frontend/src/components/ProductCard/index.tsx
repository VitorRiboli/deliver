import "./styles.css";

type Props = {
  name: string;
  imgUrl: string;
  price: number;
  description: string;
};

export default function ProductCard({ ...props }: Props) {
  return (
    <div className="order-card-container">
      <h3 className="order-card-title">{props.name}</h3>
      <img className="order-card-img" src={props.imgUrl} alt="" />
      <h3 className="order-card-price">
        <span>R$ {props.price}</span>
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
