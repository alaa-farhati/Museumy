import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

if (window?.location.pathname === "/Create") require("../css/Create.css");

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
  const [isTimeoutSet, setIsTimeoutSet] = useState(false);
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
      })
      .catch((err) => console.log(err));
  };
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
    <div className="create-page">
      <form className="form">
        <label className="createLabel" htmlFor="painter-name">
          Painter Name:
        </label>
        <input
          type="text"
          id="painter-name"
          name="painter_name"
          value={painter}
          onChange={(event) => setPainterName(event.target.value)}
        />

        <label htmlFor="painting-name">Painting Name:</label>
        <input
          type="text"
          id="painting-name"
          name="painting_name"
          value={imagename}
          onChange={(event) => setImagename(event.target.value)}
        />

        <label htmlFor="image-description">Image Description:</label>
        <textarea
          id="image-description"
          name="image_description"
          value={imageDesc}
          onChange={(event) => setImageDesc(event.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label htmlFor="image-url">Image URL:</label>
        <input
          type="text"
          id="image-url"
          name="image_url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <input id="slc" type="submit" value="Submit" onClick={fetch} />
      </form>

      <button className="btn1" onClick={() => navigate("/")}>
        See more
      </button>
    </div>
  );
}

export default Create;