import React from "react";

const handleError = ({setopenForm}) => {
  return (
    <div className="axios__error">
      <div onClick={()=>setopenForm(false)}>x</div>
      <h4>*All fields are required*</h4>
      <img
        src="https://plantillasdememes.com/img/plantillas/mi-loco-dale-pa-fuera11579945688.jpg"
        alt="logoo"
      />
    </div>
  );
};

export default handleError;
