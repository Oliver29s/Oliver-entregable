import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardsUsers from "./Components/CardsUsers";
import Form from "./Components/Form";

function App() {
  const [usersGet, setusersGet] = useState();
  const apiGet = () => {
    const url = "http://users-crud.academlo.tech/users/";
    axios
      .get(url)
      .then((res) => setusersGet(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiGet();
  }, []);

  const newUser = (data) => {
    const url = "http://users-crud.academlo.tech/users/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        apiGet();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Form newUser={newUser} />
      {
        usersGet?.map(user =>{
          <article>
            <h2>Users</h2>
            <CardsUsers key={user.id} user={user} />
          </article>
        })
      }
    </div>
  );
}

export default App;
