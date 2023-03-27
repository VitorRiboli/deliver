import "./styles.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import StepsHeaders from "../../components/StepsHeaders";


export default function Listing() {
  return (
    <>
      <StepsHeaders />
      <main className="listing-main">
        <section className="listing-card">

          

         

        </section>
      </main>

      <Footer />
      <Outlet />
    </>
  );
}
