import "./styles.css";
import pizzaIcon from "../../assets/img/pizza.svg";;

export default function CardBox() {
  return (
    <div className="listing-card-box">
      <h2>Pizza Calabresa</h2>
      <img src={pizzaIcon} alt="" />
      <p>
        <span>R$ 35,90</span>
      </p>
      <h5>Descrição</h5>
      <p>
        Descrição Uma deliciosa combinação de Linguiça Calabresa, rodelas de
        cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e
        massa especial.
      </p>
    </div>
  );
}
