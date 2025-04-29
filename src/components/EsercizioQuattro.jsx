//IMPORTAZIONI
import { NavLink } from "react-router-dom";

function EsercizioQuattro() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/esercizio1">Esercizio 1</NavLink>
      <NavLink to="/esercizio2">Esercizio 2</NavLink>
      <NavLink to="/esercizio3">Esercizio 3</NavLink>
    </nav>
  );
}

//ESPORTO
export default EsercizioQuattro;
