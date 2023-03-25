import { Outlet } from "react-router-dom"

import "./styles.css"

import homeIcon from "../../assets/img/home.svg"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer"


export default function Home() {
  return (
    <>
      <main className="home-container">
        <div className="home-content">
          <h1 className="home-title">Faça seu pedido que entregamos pra você!!!</h1>
          <p className="home-subtitle">Escolha o seu pedido e em poucos minutos levaremos na sua porta</p>
          <Link to={"/orders"}>
            <Button message={"FAZER PEDIDO"} />
          </Link>
          
        </div>
        <img className="home-image" src={homeIcon} alt="" />

      </main>

      <Footer />
      <Outlet />
    </>
  )
}