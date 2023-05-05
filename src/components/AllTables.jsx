import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

if (window?.location.pathname === "/All") require("../css/App.css");

function AllTables({ data, handleDelete }) {
  const navigate = useNavigate();

  const [isTimeoutSet, setIsTimeoutSet] = useState(false);

  useEffect(() => {
    if (!isTimeoutSet) {
      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 1000);

      setIsTimeoutSet(true);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isTimeoutSet]);

  return (
    <div className="Allposts">
      <button onClick={() => navigate("/Create")}>Home</button>
      {data.map((table) => (
        <div key={table.id}>
          <div>
            <h1>{table.painter}</h1>
            <h2>{table.imagename}</h2>
            <p>{table.price}</p>
            <p>{table.imageDesc}</p>
            <img src={table.image} alt={table.name} />
            <button onClick={() => handleDelete(table.imagename)}>
              Delete
            </button>

            <button
              onClick={() =>
                navigate("/update", { state: { formdef_data: "ala" } })
              }
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTables;
