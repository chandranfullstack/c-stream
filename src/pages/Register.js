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
            <div>
              {this.state.isRegister ?<Emptyplayer/>:<Adminplayer/>
              
            }
              
            </div>
            </>
        )
    }
}


export default signin;