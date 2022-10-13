import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";
import Header from './header'

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth.createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {

      return <Redirect to="/dashboard" />;
  }
  return (
    <>
    <Header/>
  <div class="wrapper fadeInDown">
  <div id="formContent">
    
    <h2 class="inactive underlineHover"><a href="/login"> Sign In</a> </h2>
    <h2 class="active">Sign Up </h2>
    <form onSubmit = {handleSubmit}>
      <input type="email" id="login" class="fadeIn second" name="email" placeholder="email" /><br/>
      <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password" /><br/>
      <input type="submit" class="fadeIn fourth" value="Sign Up" />
    </form>
    

  </div>
</div>
</>
  );
};

export default SignUp;