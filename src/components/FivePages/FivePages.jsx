import React from "react";
import { Navigate } from "react-router-dom";
import "../../styles/FivePages.scss";

const FivePages = () => {
  return (
    <section>
      <div className="CardOne">
        <div className="card" onClick={Navigate("/gafasgraduadas")}>
          <p>Gafas Graduadas</p>
        </div>
        <div className="card">Gafas de Sol</div>
      </div>
      <div className="CardOne">
        <div className="card">
          <p>Baja Vision</p>
        </div>
        <div className="card">
          <p>Audilogia</p>
        </div>
        <div className="card">
          <p>Lentillas</p>
        </div>
      </div>
    </section>
  );
};

export default FivePages;
