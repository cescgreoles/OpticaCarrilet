import React from "react";
import { GrContact } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const IconosDerecha = () => {
  return (
    <div className="iconos-derecha">
      <BsFillTelephoneFill className="icono" />
      <GrContact className="icono" />
      <SiInstagram className="icono" />
    </div>
  );
};

export default IconosDerecha;
