import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./routes/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
            <Route index element={<Home />}/>
            <Route path="home" element={<Home />}/>
          
          
          
        </Route>

        {/*
        <Route path="*" element={<NotFound />}/>
        */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
