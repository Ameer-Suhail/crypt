import { render } from '@testing-library/react';
import React,{Component} from 'react';
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import './header.css'
import { AiFillWechat, AiOutlinePoweroff} from 'react-icons/ai';
import { ImTwitter,ImHome3} from 'react-icons/im';


 class header extends Component {
     render(){
    return (
    <div class="top">
      <h1 className="logo">Crypt</h1>
      <div class="icon-bar">
        <a class="active" href="#"><i class="fa fa-home"></i></a> 
        <a href="/dashboard"><i ><ImHome3 /></i></a> 
        <a href="/chat"><i ><AiFillWechat /></i></a> 
        
        <a href="/hash"><i ><ImTwitter /></i></a> 
        <a onClick={() => firebaseConfig.auth.signOut()} href="/login"><i ><AiOutlinePoweroff /></i></a>
        
      </div>
    </div>
    );
    }
}
export default header;
 
    