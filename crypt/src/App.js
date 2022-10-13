import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Chat from "./components/Chatroom.jsx";
import Hashtag from "./hashtag/Hashtag";
import { AuthProvider } from "./components/Auth";
import Pred from "./predictionj"
import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/hash" component={Hashtag} />
          <Route exact path="/pred" component={Pred} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;