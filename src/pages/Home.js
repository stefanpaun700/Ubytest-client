import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const {auth} = useSelector((state) => ({...state}));
  return (
    <div className="container-fluid" style={{ backgroundColor: "#DDDDDD" }}>
        <div className=" pt-3 text-center">
          <h4 style={{ color: "red" }}>
            Home page {JSON.stringify(auth)}
          </h4>
        </div>
        <div  style={{height: '100vh'}} className="row">
		      <div className="col-md-6 offset-md-3">
            <p>My ecom personal page </p>
          </div>
        </div>
      </div>
  );

}

export default Home;
