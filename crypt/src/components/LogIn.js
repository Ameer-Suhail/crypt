import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import './login.css';
import Header from './header'



var f =0;
const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    var f =0;
    const { email, password } = e.target.elements;
    
    try {
      firebaseConfig.auth.signInWithEmailAndPassword(email.value, password.value);
      
    } catch (error) {
      var f =1;
      console.log(error,f)
      alert(error);
      
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
    <Header/>
    
  <div class="wrapper fadeInDown">
  <div id="formContent">
    
    <h2 class="active"> Sign In </h2>
    <h2 class="inactive underlineHover"><a href="/signup"> Sign Up</a></h2>
    <form onSubmit = {handleSubmit}>
      <input type="email" id="login" class="fadeIn second" name="email" placeholder="email" /><br/>
      <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" /><br/>
      <input type="submit" class="fadeIn fourth" value="Log In" />
    </form>
    {f ? <p className="text-danger">"No record"</p> : null}
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
</>

      
      
  );
};

export default LogIn;