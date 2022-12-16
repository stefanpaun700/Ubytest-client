import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit} className={"pt-4"}>
      <input
        type="name"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <br />
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Login
      </button>
    </form>
  );

  return (
    <div className="container-fluid" style={{ backgroundColor: "#DDDDDD"}}>
      <div className="container pt-3 text-center">
          <h4 style={{ color: "red" }}>
            Login page
          </h4>
      </div><br />
        <div className="row" style={{height: '50vh'}}>
          <div className="col-md-6 offset-md-3" style={{ backgroundColor: "#e6fffb"}}>
          <ToastContainer />
            {loginForm()}
          </div>
        </div>
        <div className="row" style={{height: '40vh'}}></div>
      </div>
  );
};

export default Login;
