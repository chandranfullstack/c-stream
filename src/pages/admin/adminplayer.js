import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";




class Adminplayer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div style={{marginTop:"200px",width:"500px",marginLeft:"500px"}}>
          <Form onSubmit="/video">
             <Form.Group>
               <Form.Label>UPLOAD YOUR VIDEOS</Form.Label>
               <Form.Control type="file"  name="video"  />
             </Form.Group>
             <br/>
             <Button variant="primary" type="submit">
                    UPLOAD
             </Button>
             </Form>
            </div>
        )
    }
}
export default Adminplayer;