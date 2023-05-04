import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
if (window?.location.pathname === "/") require("../css/App.css");

function AllTables({ data, handleDelete, handleUpdate }) {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [painter, setPainter] = useState("");
  const [imagename, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageDesc, setImageDesc] = useState("");

  const obj = {
    painter: painter,
    imagename: imagename,
    imageDesc: imageDesc,
    price: price,
    image: image,
  };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
// navigate("/update")
//     handleUpdate(obj.painter, obj);
//     setView(false);
//   };

  return (
    <div>
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
            <button onClick={console.log(obj)}>Update</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTables;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// if (window?.location.pathname === "/") require("../css/App.css");

// function AllTables({ data, handleDelete, handleUpdate }) {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true); // state variable for loading phase
//   const [view, setView] = useState(false);
//   const [painter, setPainter] = useState("");
//   const [imagename, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [imageDesc, setImageDesc] = useState("");

//   const obj = {
//     painter: painter,
//     imagename: imagename,
//     imageDesc: imageDesc,
//     price: price,
//     image: image,
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
//     handleUpdate(obj.painter, obj);
//     setView(false);
//   };

//   //   useEffect(() => {
//   //     // Simulating a delay of 2 seconds to show the loading phase
//   //     setTimeout(() => {
//   //       setLoading(false);
//   //     }, 5000);
//   //   }, []);

//   //   if (loading) {
//   //     return <p>Loading...</p>;
//   //   }

//   return (
//     <div>
//       <button onClick={() => navigate("/Create")}>Home</button>
//       {data.map((table) => (
//         <div key={table.id}>
//           {(
//             <div>
//               <form onSubmit={handleUpdateSubmit}>
//                 <input
//                   type="text"
//                   onChange={(e) => setPainter(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//                 <input type="text" onChange={(e) => setImage(e.target.value)} />
//                 <input
//                   type="text"
//                   onChange={(e) => setImageDesc(e.target.value)}
//                 />
//                 <button type="submit">Update</button>
//                 <button onClick={() => setView(false)}>Cancel</button>
//               </form>
//             </div>
//           ) : (
//             <div>
//               <h1>{table.painter}</h1>
//               <h2>{table.imagename}</h2>
//               <p>{table.price}</p>
//               <p>{table.imageDesc}</p>
//               <img src={table.image} alt={table.name} />
//               <button onClick={() => handleDelete(table.imagename)}>
//                 Delete
//               </button>
//               <button onClick={() => setView(true)}>Update</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AllTables;
