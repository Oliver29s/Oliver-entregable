import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

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

  console.log(usersGet);

  return <div className="App">

    
  </div>;
}

export default App;
