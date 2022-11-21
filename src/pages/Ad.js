import React from 'react';
import Adimage from './ad1.jpeg';
import Adimage2 from './ad2.jpeg';
import './style/ad.css';


class Ad extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
           <>
           <div id='adpage'>
              <div id='ad1' >
                  <span id='image1'>
                    <img src={Adimage} width="400px"></img>
                  </span>
                  <span id='text1'>
                     <h1>Record your screen and yourself</h1>
                     <p class="para">Show exactly what you mean with explainer videos by recording
                         yourself and the screen. Plus, you can add text, 
                         drawings, and effects to personalize your videos.
                      </p>
                  </span>
              </div>
              <div id='ad2'>
                <span id='text2'>
                   <h1>Put your live video to work</h1>
                   <p class="para">
                    Reach everyone in real time, whether you're live streaming a 
                    conference, webinar, or your company all-hands. Live streaming gives you a way to connect
                    with your employees, customers, and community. 
                   </p>
                </span>
                <span id="image2">
                <img src={Adimage2} width="400px"></img>
                </span>
              </div>
              </div>
           </>
        )
    }
}

export default Ad;