import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialData = {email: "", password: "" };

const Login = () => {
  const [userData, setUserData] = useState(initialData);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleLoginBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4004/login",
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
    <div className="container d-flex justify-content-center mt-4">
      <div className="card mt-5 mb-5" style={{ width: "24rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-3">Login</h3>
          <form onSubmit={handleLoginBtn}>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <button type="submit" className="btn btn-sm btn-primary mb-4">
              Submit
            </button>
          </form>
          <div>
            Don't have any account ?{" "}
            <Link to="/signup" className="card-link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
