import "./styles.css";

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import StepsHeaders from "../../components/StepsHeaders";
import ProductCard from "../../components/ProductCard";
import OrderLocation from "../../components/OrderLocation";
import OrderSummary from "../../components/OrderSummary";

import { OrderLocationData, Product } from "../../utils/types";
import { findAllProducts, saveOrder } from "../../services/product-service";
import { checkIsSelected } from "./helpers";
import { toast } from "react-toastify";



export default function ProductListing() {

  const [products, setProducts] = useState<Product[]>([]);

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();


  useEffect(() => {
    findAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        toast.warning('Erro ao Listar Produtos')
        console.log(err);
      });
  }, []);

   
  const handleSelectProduct = (product: Product) => {

    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((res) => { //Promisse da requisição
      toast.error(`Pedido enviado com sucesso! Nº ${res.data.id}`); //Usando o Toast error para combinar com o layout
      setSelectedProducts([]); //Após enviar com sucesso, limpa a lista de produtos selecionados
   
    }).catch(() => {
        toast.warning('Erro ao enviar pedido'); //Em caso de erro
    })
  }

  return (
    <>
      <main className="orders-container">
        <StepsHeaders />

        <div className="orders-list-container">
          <section className="orders-list-items">
            {products.map((product) => (
              <ProductCard  
                key={product.id}
                product={product}
                onSelectProduct={handleSelectProduct}  
                isSelected={checkIsSelected(selectedProducts, product)}             
              />
            ))}
          </section>
        </div>

        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary 
          amount={selectedProducts.length} 
          totalPrice={ selectedProducts.reduce((sum, item) => {
            return sum + item.price
          }, 0) }
          onSubmit={handleSubmit}
        />
      </main>

      <Footer />
    </>
  );
}
