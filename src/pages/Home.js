import React from 'react';
import video from './video.mp4';
import './style/Home.css';

class Home extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
       <>
         <div >
                      
          <video width="100%" height="800px" id="homevideo" autoPlay muted>
           <source src={video} /> 
           </video>
           <span id='overlay'>
           <h1>Live Stream Watch free now &nbsp;<button className='btn btn-success'>Request Demo</button></h1>
            <p>We make it easy to livestream engaging virtual events, reach your remote workforce, and launch a subscription channel.
           </p>
           </span>
         </div>
       </>  
            
        )
    }
}


export default Home;