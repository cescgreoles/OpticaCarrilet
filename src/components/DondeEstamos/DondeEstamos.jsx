import React from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../styles/DondeEstamos.scss";

const DondeEstamos = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/nuestratienda");
  }
  return (
    <section className="dondeEstamos">
      <button onClick={handleClick}>
        <BsFillGeoAltFill />

        <p>DÓNDE ESTAMOS?</p>

        <img
          src="https://manoloilustrador.files.wordpress.com/2018/01/manoluts687.jpg"
          alt="https://manoloilustrador.files.wordpress.com/2018/01/manoluts687.jpg"
          width={"250px"}
        ></img>
      </button>
    </section>
  );
};

export default DondeEstamos;
