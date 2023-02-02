import "./App.scss";
import IconosDerecha from "./components/IconosDerecha/IconosDerecha";
import LogoPrinciapal from "./components/LogoPrincipal/LogoPrinciapal";
import { Route, Routes } from "react-router-dom";
import MenuNavbar from "./components/MenuNavbar/MenuNavbar";
import GafasSol from "./pages/GafasSol";
import GafasGraduadas from "./pages/GafasGraduadas";
import BajaVision from "./pages/BajaVision";
import Lentillas from "./pages/Lentillas";
import Audilogia from "./pages/Audilogia";

import FivePages from "./components/FivePages/FivePages";
import CarrusselReact from "./components/CarrusselReact/CarrusselReact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="firstContainer-menu">
        <LogoPrinciapal />
        <IconosDerecha />
      </div>
      <div className="secondContainer">
        <MenuNavbar />

        <Routes>
          <Route path="gafassol" element={<GafasSol />} />
          <Route path="gafasgraduadas" element={<GafasGraduadas />} />
          <Route path="bajavision" element={<BajaVision />} />
          <Route path="lentillas" element={<Lentillas />} />
          <Route path="audiologia" element={<Audilogia />} />
        </Routes>
        <div className="carouselReact">
          <CarrusselReact />
        </div>

        <div className="FiveContainer">
          <FivePages />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
