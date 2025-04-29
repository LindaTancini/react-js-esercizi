//IMPORTAZIONI
import axios from "axios";
import { useEffect, useState } from "react";

function EsercizioDue() {
  //CREO STATI
  const [users, setUsers] = useState([]);
  //CHIAMATA AXIOS
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => setUsers(response.data))
      .catch((error) =>
        console.error("Errore durante la chiamata API:", error)
      );
  }, []);
  return (
    <div className="container">
      <h2>Lista utenti</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

//ESPORTO
export default EsercizioDue;
