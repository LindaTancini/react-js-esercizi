//IMPORTAZIONI
import { useState, useEffect } from "react";
import axios from "axios";

function EsercizioGatti() {
  //CREO STATI
  const [image, setImage] = useState("");

  //CARICO LE IMMAGINI TRAMITE API
  const changeImage = () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    axios
      .get(url)
      .then((response) => setImage(response.data[0].url))
      .catch((error) =>
        console.error("Errore nel recupero dell'immagine:", error)
      );
  };
  // CARICO UN'IMMAGINE CASUALE
  useEffect(() => {
    changeImage();
  }, []);

  return (
    <div className="container">
      <h4>Genera immagine di un gatto casuale:</h4>
      {image && <img src={image} alt="Gatto Casuale" />}
      <button onClick={changeImage}>Cambia immagine</button>
    </div>
  );
}

//ESPORTO
export default EsercizioGatti;
