// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Update() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch the orders from the server
//     axios
//       .get("http://localhost:5000/orders")
//       .then((res) => setOrders(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // Handle updating an order
//   const handleUpdate = (id, data) => {
//     axios
//       .put(`http://localhost:5000/orders/${id}`, data)
//       .then((res) => console.log(`Updated order ${id}`))
//       .catch((err) => console.log(err));
//   };

//   // Handle deleting an order
//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:5000/orders/${id}`)
//       .then((res) => {
//         console.log(`Deleted order ${id}`);
//         // Remove the deleted order from the local state
//         setOrders(orders.filter((order) => order.id !== id));
//       })
//       .catch((err) => console.log(err));
//   };

//   //   {view ? (
//   //     <div>
//   //       <form onSubmit={handleUpdateSubmit}>
//   //         <input
//   //           type="text"
//   //           onChange={(e) => setPainter(e.target.value)}
//   //         />
//   //         <input
//   //           type="number"
//   //           onChange={(e) => setPrice(e.target.value)}
//   //         />
//   //         <input type="text" onChange={(e) => setImage(e.target.value)} />
//   //         <input
//   //           type="text"
//   //           onChange={(e) => setImageDesc(e.target.value)}
//   //         />
//   //         <button type="submit">Update</button>
//   //         <button onClick={() => setView(false)}>Cancel</button>
//   //       </form>
//   //     </div>
//   //   ) : (

//   return (
//     <div>
//       <h2>Orders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Painter</th>
//             <th>Image Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Image URL</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.painter}</td>
//               <td>{order.imagename}</td>
//               <td>{order.imageDesc}</td>
//               <td>{order.price}</td>
//               <td>{order.image}</td>
//               <td>
//                 <button
//                   onClick={() =>
//                     handleUpdate(order.id, { painter: "New Painter Name" })
//                   }
//                 >
//                   Update
//                 </button>
//                 <button onClick={() => handleDelete(order.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Update;

import React from "react";

function Update() {
  return <div>Updated</div>;
}

export default Update;
