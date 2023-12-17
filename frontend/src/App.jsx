import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("api/v1/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Chai Aur Backend</h1>
      <h2>Total Users {users.length} </h2>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;
