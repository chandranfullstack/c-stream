import React from 'react';
import Admin from './Admin';
import video from '../admin/admin.mp4';
import './adminplayer.css';
import Uploadvideo from './uploadvideo';


class Adminplayer extends React.Component{
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
                     <li onClick={<Uploadvideo/>}>uploadvideo</li>
                     <li>playlist</li>
                     <input type="file" name="file"/>
                     <p id='demo'></p>
                     <li></li>
                    </ol>
                  </div>
                  <div id='maincontent'>
                    <table>
                        <thead>
                            <tr id="first-row">
                                <td width="350px" height="200px"><video height="200px" width="350px" autoPlay muted><source src={video} /></video></td>
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

export default Adminplayer;