import React from "react";
import OrderContainer from "./components/OrderContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { SecondPage } from "./Pages/SecondPage/SecondPage";
import { ThirdPage } from "./Pages/ThirdPage/ThirdPage";
import { FourthPage } from "./Pages/FourthPage/FourthPage";
import { FifthPage } from "./Pages/FifthPage/FifthPage";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import './App.css';
const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThirdPage" element={<ThirdPage />} />
          {/*<Route path="/FourthPage" element={<FourthPage />} />*/}
          {/*<Route path="/FifthPage" element={<FifthPage />} />*/}
        </Routes>
       
        <Footer />
      </Router>
      

    </div>
  );
}

export { App };
