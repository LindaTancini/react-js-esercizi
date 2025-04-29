//IMPORTAZIONI
import { use, useState } from "react";

function EsercizioTre() {
  //CREO STATI
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // CREO FUNZIONE PER IL PREVENT DEFAULT
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email };
    //CREO UN NUOVO USER
    setUsers([...users, newUser]);
    //PULISCO I CAMPI
    setName("");
    setEmail("");
  };
  return (
    <div>
      <h2>Aggiunta di un utente</h2>

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
        <button type="submit"> Aggiungi utente </button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.nome} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

//ESPORTO
export default EsercizioTre;
