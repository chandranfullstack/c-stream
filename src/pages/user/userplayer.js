import React from 'react';
import video from './admin.mp4';
import "./adminplayer.css";



class Userplayer extends React.Component{
    constructor(props){
        super(props)
        {console.log(this.props.Login)}
    }



    render(){
        return(
            <>
               <div id="main">
                  <div id='sidebar'>
                   <ol>
                     <li>playlist</li>
                    </ol>
                  </div>
                  <div id='maincontent'>
                    <table>
                        <thead>
                            <tr id="first-row">
                                <td><video width="330px" height="200px" controls><source src={video} /></video></td>
                                <td><video height="200px" width="330px" controls><source src/></video></td>
                                <td><video height="200px" width="330px" controls><source src /></video></td>
                                
                            </tr>
                            <tr>
                                <td><video height="200px" width="330px" controls><source src/></video></td>
                                <td><video height="200px" width="330px" controls><source src /></video></td>
                                <td><video height="200px" width="330px" controls><source src /></video></td>
                                
                            </tr>
                            <tr>
                                <td><video height="200px" width="330px" controls><source src /></video></td>
                                <td><video height="200px" width="330px" controls><source src /></video></td>
                                <td><video height="200px" width="330px" controls><source src /></video></td>
                                
                            </tr>
                        </thead>
                    </table>
                  </div>
               </div>
            </>
        )
    }
}

export default Userplayer;