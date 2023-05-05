import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
if (window?.location.pathname === "/update") require("../css/upd.css");

function Update({ handleUpdate }) {
  const [painter, setPainter] = useState("");
  const [imagename, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageDesc, setImageDesc] = useState("");
  //seems like usecontext but it works perfectly but its hard to know it
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.formdef_data;
  const obj = {
    painter: painter,
    imagename: imagename,
    imageDesc: imageDesc,
    price: price,
    image: image,
  };
  console.log(name);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    handleUpdate(name, obj);
    navigate("/All");
    window.location.reload();
  };
  const navigBack = () => {
    navigate("/All");
    window.location.reload();
  };

  return (
    <div className="updated">
      <form>
        <label htmlFor="painter-name">Painter Name:</label>
        <input
          type="text"
          id="painter-name"
          name="painter"
          required
          onChange={(event) => setPainter(event.target.value)}
        />

        <label htmlFor="painting-name">Painting Name:</label>
        <input
          type="text"
          id="painting-name"
          name="imagename"
          required
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="image-description">Image Description:</label>
        <textarea
          id="image-description"
          name="imageDesc"
          required
          value={imageDesc}
          onChange={(event) => setImageDesc(event.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          required
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label htmlFor="image-url">Image URL:</label>
        <input
          type="text"
          id="image-url"
          name="image"
          required
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <input onClick={handleUpdateSubmit} type="submit" value="Submit" />
        <button className="cancel" onClick={navigBack}>
          cancel
        </button>
      </form>
    </div>
  );
}

export default Update;
