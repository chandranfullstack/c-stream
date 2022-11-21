import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './style/Register.css';
import Adminplayer from './admin/adminplayer.js';
import Emptyplayer from './Emptyplayer.js';



class signin extends React.Component{
    constructor(props){
        super(props)
        this.state={isRegister:false}
    }


    render(){
        return(
            <>
            <div style={{marginTop:"200px" ,textAlign:"center",fontSize:"20px"}}>
               <p>
                 register as<a href="http://localhost:3000/admin">ADMIN</a> or <a href="http://localhost:3000/user">USER</a>
                </p>
            </div>
            </>
        )
    }
}


export default signin;