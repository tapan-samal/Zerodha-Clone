import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialData = { username: "", email: "", password: "" };

const Signup = () => {
  const [userData, setUserData] = useState(initialData);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSignupBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4004/signup",
        userData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setUserData(initialData);
      console.log(response);
    } catch (error) {
      console.error("Error: ", error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-3">
      <div className="card mt-5 mb-5" style={{ width: "24rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-3">Sign Up</h3>
          <form onSubmit={handleSignupBtn}>
            <div className="mb-3">
              <label className="form-label ">Username:</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                className="form-control"
                onChange={handleInputData}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                className="form-control"
                onChange={handleInputData}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                className="form-control"
                onChange={handleInputData}
                required
              />
            </div>
            <button type="submit" className="btn btn-sm btn-primary mb-3">
              Submit
            </button>
          </form>
          <div>
            Already have an account ?{" "}
            <Link to="/login" className="card-link">
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
