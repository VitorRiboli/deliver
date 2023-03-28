import "./styles.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import StepsHeaders from "../../components/StepsHeaders";
import pizzaIcon from "../../assets/img/pizza.svg";
import CardBox from "../../components/ProductCard";
import ProductCard from "../../components/ProductCard";
import { useEffect } from "react";




export default function ProductListing() {

  useEffect(() => {
    
  }, [])


  return (
    <>
      <StepsHeaders />
      <main className="orders-list-container">
        <section className="orders-list-items">

          <ProductCard
            name={"Pizza Calabresa"}
            imgUrl={pizzaIcon}
            price={35.99}
            description={
              "Descrição Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial."
            }
          />


        </section>
      </main>

      <Footer />
      <Outlet />
    </>
  );
}
