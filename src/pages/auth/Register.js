import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from '../../components/RegisterForm';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
      console.log("REGISTER USER ===> ", res);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="container-fluid" style={{ backgroundColor: "#DDDDDD"}}>
      <div className="container pt-3 text-center">
          <h4 style={{ color: "red" }}>
            Register page
          </h4>
      </div><br />
        <div className="row" style={{height: '50vh'}}>
          <div className="col-md-6 offset-md-3" style={{ backgroundColor: "#e6fffb"}}>
            <ToastContainer />
            <RegisterForm 
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
        <div className="row" style={{height: '40vh'}}></div>
      </div>
  );
};

export default Register;
