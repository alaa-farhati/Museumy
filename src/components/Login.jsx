import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
if (window?.location.pathname === "/") require("../css/login.css");

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTimeoutSet, setIsTimeoutSet] = useState(false);
  const navigate = useNavigate();
  //to generate the id for th esubmit func
  const generateId = () => {
    return Math.random().toString(4).substring(2, 10);
  };
  //sign up
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      alert("Please fill all the fields!");
    } else {
      const user = {
        id: generateId(),
        username: username,
        email: email,
        userpassword: password,
      };
      axios
        .post("http://localhost:5000/users", user)
        .then((res) => {
          console.log(res.data);
          navigate("/Create");
        })
        .catch((err) => console.log(err));
    }
  };
  //login
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/users/${username}`)
      .then((res) => {
        const user = res.data;
        user.map((e) => {
          console.log(e.username, e.userpassword, username, password);
          if (e.username === username && e.userpassword === password) {
            console.log("Login successful");
            navigate("/Create");
          } else {
            console.log("Wrong password");
            alert("Wrong password");
          }
        });
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

  //i search for them and i transfer them to jequery to handle this but its not all mine it just for th effects:)
  useEffect(() => {
    const loginBtn = $("#login");
    const signupBtn = $("#signup");

    loginBtn.on("click", (e) => {
      let parent = $(e.target).parent().parent();
      $.each(parent.attr("class").split(" "), (i, className) => {
        if (className !== "slide-up") {
          parent.addClass("slide-up");
        } else {
          signupBtn.parent().addClass("slide-up");
          parent.removeClass("slide-up");
        }
      });
    });

    signupBtn.on("click", (e) => {
      let parent = $(e.target).parent();
      $.each(parent.attr("class").split(" "), (i, className) => {
        if (className !== "slide-up") {
          parent.addClass("slide-up");
        } else {
          loginBtn.parent().parent().addClass("slide-up");
          parent.removeClass("slide-up");
        }
      });
    });
  }, []);
  //all end here
  return (
    <div className="form-structor">
      <div className="signup">
        <h2 className="form-title" id="signup">
          <span>or</span>Sign up
        </h2>
        <div className="form-holder">
          <input
            type="text"
            className="input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Sign up
        </button>
      </div>
      <div className="login slide-up">
        <div className="center">
          <h2 className="form-title" id="login">
            <span>or</span>Log in
          </h2>
          <div className="form-holder">
            <input
              type="text"
              className="input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-btn" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
