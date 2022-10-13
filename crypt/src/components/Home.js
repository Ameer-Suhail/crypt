import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Heade from "./header";


const Home = () => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <>
    <Heade/>
      <h1>Home</h1>
      {currentUser ? (
        
        <Redirect to="/login" /> 
      
      ) : (
        <p>
          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> 
        </p>
      )}
    </>
  );
};

export default Home;