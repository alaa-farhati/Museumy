import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search.jsx";

if (window?.location.pathname === "/All") require("../css/App.css");

function AllTables({ data, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div className="Allposts">
      <Search />
      <button
        onClick={() => {
          navigate("/Create");
          window.location.reload();
        }}
      >
        Create
      </button>

      <div className="post-grid">
        {data.map((table) => (
          <div key={table.id} className="post-card">
            <div>
              <h1>{table.painter}</h1>
              <h2>{table.imagename}</h2>
              <p>
                {table.price} {" $"}
              </p>
              <p>{table.imageDesc}</p>
              <img src={table.image} alt={table.name} />
              <button onClick={() => handleDelete(table.imagename)}>
                Delete
              </button>
              <button
                //it works like the usecontext with the useconnection to get the data from teh path required
                onClick={() => {
                  navigate("/update", {
                    state: { formdef_data: table.painter },
                  });
                  window.location.reload();
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTables;
