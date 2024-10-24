import React from "react";
import './App.css';


const Obraz = (props) => (
    <div className='obraz'>
        <img src={props.zdjecie} alt="obraz"/>
          <p>Obraz numer: {props.nr}</p>
          <p>{props.nazwa}</p>
          <p>{props.opis}</p>
          <p className="cena">Cena: {props.cena}</p>
        </div>
);

export default Obraz