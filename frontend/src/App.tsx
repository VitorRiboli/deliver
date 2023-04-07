import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import ProductListing from "./routes/ProductListing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="orders" element={<ProductListing />} />
          </Route>

          {/*
        <Route path="*" element={<NotFound />}/>
        */}
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
