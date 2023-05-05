import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
if (window?.location.pathname === "/Create") require("../css/upd.css");

function Create() {
  const navigate = useNavigate();
  //to generate a random id for my database orders
  const generateId = () => {
    return Math.random().toString(4).substring(2, 10);
  };
  const [painter, setPainterName] = useState("");
  const [imagename, setImagename] = useState("");
  const [imageDesc, setImageDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const obj = {
    id: generateId(),
    painter: painter,
    imagename: imagename,
    imageDesc: imageDesc,
    price: price,
    image: image,
  };

  const fetch = () => {
    axios
      .post("http://localhost:5000/orders", obj)
      .then((res) => {
        console.log(res);
        navigate("/All");
      })
      .catch((err) => console.log(err));
  };
  const navig = () => {
    navigate("/All");

    fetch();
    window.location.reload();
  };
  const navigBack = () => {
    navigate("/All");
    window.location.reload();
  };

  return (
    <div className="updated">
      <form className="form">
        <label className="createLabel" htmlFor="painter-name">
          Painter Name:
        </label>
        <input
          required
          type="text"
          id="painter-name"
          name="painter_name"
          value={painter}
          onChange={(event) => setPainterName(event.target.value)}
        />

        <label htmlFor="painting-name">Painting Name:</label>
        <input
          required
          type="text"
          id="painting-name"
          name="painting_name"
          value={imagename}
          onChange={(event) => setImagename(event.target.value)}
        />

        <label htmlFor="image-description">Image Description:</label>
        <textarea
          required
          id="image-description"
          name="image_description"
          value={imageDesc}
          onChange={(event) => setImageDesc(event.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          required
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label htmlFor="image-url">Image URL:</label>
        <input
          required
          type="text"
          id="image-url"
          name="image_url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <input required id="slc" type="submit" value="Submit" onClick={navig} />
        <button className="cancel" onClick={navigBack}>
          cancel
        </button>
      </form>
    </div>
  );
}

export default Create;
