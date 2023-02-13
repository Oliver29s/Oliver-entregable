import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardsUsers from "./Components/CardsUsers";
import Form from "./Components/Form";
import HandleError from "./Components/handleError";

function App() {
  const [usersGet, setusersGet] = useState();
  const [updateInfo, setupdateInfo] = useState();
  const [handleError, setHandleError] = useState(false);
  const [openForm, setopenForm] = useState(false)
  const apiGet = () => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .get(url)
      .then((res) => setusersGet(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiGet();
  }, []);

  const newUser = (data) => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        apiGet();
        setHandleError(false)
      })
      .catch((err) => {
        console.log(err), setHandleError(!handleError);
      });
  };
const formOpen = () => setopenForm(true)
console.log(formOpen);
  return (
    <div className="App">
      <header className="header__users">
        <div className="header__info">
          <h2>Forms Register | Update</h2>
          <button onClick={formOpen} className="button">Register Users</button>
        </div>
      </header>
      <Form
        newUser={newUser}
        updateInfo={updateInfo}
        setupdateInfo={setupdateInfo}
        apiGet={apiGet}
        openForm={openForm}
        setopenForm={setopenForm}
      />
      {
        handleError ? <HandleError setopenForm={setopenForm}/>
        :
      <article>
        <h2>Users</h2>
        {usersGet?.map((user) => (
          <CardsUsers
            key={user.id}
            user={user}
            apiGet={apiGet}
            setupdateInfo={setupdateInfo}
            setopenForm={setopenForm}
           
          />
        ))}
      </article>
      }
    </div>
  );
}

export default App;
