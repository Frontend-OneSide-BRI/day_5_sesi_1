import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { getUser } from "./service/users";
import List from "./components/List";
function App() {
  const [users, setUsers] = useState([]);
  const [userCreate, setUserCreate] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    getUser()
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", userCreate)
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };

  const onChange = (event) => {
    setUserCreate({ [event.target.name]: event.target.value });
  };
  return (
    <div className="App">
      <List users={users} />
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name" onChange={onChange} />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={onChange}
        />
        <button>Simpan</button>
      </form>
    </div>
  );
}

export default App;
