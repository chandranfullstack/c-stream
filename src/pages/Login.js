import React from 'react';
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import './style/Login.css'





class Login extends React.Component{
    constructor(){
        super()
        this.state={email:"",password:""}
    }



    render(){
        return(
<div id="box" >  
                
        <div id="form" >
        <h4 style={{textAlign:"center"}}>LOG IN </h4>
        <br></br>
        <Form action="/login" method="post" onSubmit={this.FormSubmit}>
            
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="femail"  />
      </Form.Group>
      <br></br>
      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="fpassword"  />
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
</div>
        )
}
}


export default Login;