import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <input
        type="text"
        placeholder="Search by image name"
        onChange={(e) => setName(e.target.value)}
      />
      <ul>
        {searchedData.map((table) => (
          <li key={table.id}>
            <h1>{table.painter}</h1>
            <h2>{table.imagename}</h2>
            <p>{table.price}</p>
            <p>{table.imageDesc}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Search;
