import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../style/Register.css';



class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state={isAdmin:"false"}
        console.log(this.state.isAdmin)
    }
    
adminSubmit=()=>{
  this.setState({isAdmin:"true"})
  console.log("submit")
}

    render(){
        return(
            <Form id="sform" action="/admin" method="post" onSubmit={this.adminSubmit}>
              <h4 style={{textAlign:"center"}}>ADMIN REGISTER</h4>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your name" name="name" />
            </Form.Group>
            <br/>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email"/>
            </Form.Group>
            <br></br>
            <Form.Group  controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  name="password"/>
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter Your mobile number" name="phonenumber" />
            </Form.Group>
            <br/>
            <Button variant="success" type="submit">
                 Register As Admin
            </Button>
          </Form> 
        )
    }
}


export default Admin;