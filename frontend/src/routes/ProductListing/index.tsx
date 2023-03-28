import "./styles.css";

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import StepsHeaders from "../../components/StepsHeaders";
import ProductCard from "../../components/ProductCard";

import pizzaIcon from "../../assets/img/pizza.svg";

import { Product } from "../../utils/types";
import { findAllProducts } from "../../services/product-service";

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    findAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(products)

  return (
    <>
      <StepsHeaders />
      <main className="orders-list-container">
        <section className="orders-list-items">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              imageUri={product.imageUri}
              price={product.price}
              description={product.description}
            />
          ))}
        </section>
      </main>

      <Footer />
      <Outlet />
    </>
  );
}
