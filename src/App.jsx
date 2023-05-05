import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import Home from "./components/Home";
import Create from "./components/Create";
import AllTables from "./components/AllTables";
import Update from "./components/Update";
// import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState([]);

  const render = () => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    render();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/orders/${id}`)
      .then(() => {
        render();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (id, obj) => {
    axios
      .put(`http://localhost:5000/orders/${id}`, obj)
      .then(() => {
        render();
      })
      .catch((err) => console.log(err));
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Navbar />
          <Switch> */}
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route
            path="/update"
            element={<Update handleUpdate={handleUpdate} />}
          />
          <Route
            path="/All"
            element={<AllTables data={data} handleDelete={handleDelete} />}
          />
          {/* </Switch> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
