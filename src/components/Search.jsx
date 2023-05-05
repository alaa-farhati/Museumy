import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
if (window?.location.pathname === "/All") require("../css/App.css");

function Search() {
  const [name, setName] = useState("");
  const [searchedData, setSearch] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const search = async () => {
      const res = await axios.get(`http://localhost:5000/orders/${name}`);
      setSearch(res.data);
    };
    if (name !== "") {
      search();
    }
  }, [name]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by image name"
        onChange={(e) => setName(e.target.value)}
      />
      <ul>
        {searchedData.map((table) => (
          <li key={table.id}>
            <h1>{table.painter}</h1>
            <h1>{table.imagename}</h1>
            <img src={table.image} alt={table.name} />
            <p>
              {table.price}
              {" $"}
            </p>
            <p>{table.imageDesc}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Search;
