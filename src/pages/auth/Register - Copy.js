import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    //
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container-fluid" style={{ backgroundColor: "#DDDDDD"}}>
      <div className="container pt-3 text-center">
          <h4 style={{ color: "red" }}>
            Register page
          </h4>
      </div><br />
        <div className="row" style={{height: '20vh'}}>
          <div className="col-md-6 offset-md-3" style={{ backgroundColor: "white"}}>
            
            {registerForm()}
          </div>
        </div>
        <div className="row" style={{height: '80vh'}}></div>
      </div>
  );
};

export default Register;
