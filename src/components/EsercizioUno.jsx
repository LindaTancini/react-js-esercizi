//IMPORTAZIONI
import { useState } from "react";

function EsercizioUno() {
  //CREO GLI STATI
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // CREO FUNZIONE PER IL PREVENT DEFAULT
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, password });
    //PULISCO I CAMPI
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit"> Clicca per registrarti</button>
    </form>
  );
}

//ESPORTO
export default EsercizioUno;
