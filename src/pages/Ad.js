import React from 'react';


class Ad extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
           <>
              <div>
                  <span>
                    <img src=''></img>
                  </span>
                  <span>
                     <h1>Record your screen and yourself</h1>
                     <p>Show exactly what you mean with explainer videos by recording
                         yourself and the screen. Plus, you can add text, 
                         drawings, and effects to personalize your videos.
                      </p>
                  </span>
              </div>
              <div>
                <span>
                   <h1>Put your live video to work</h1>
                   <p>
                    Reach everyone in real time, whether you're live streaming a 
                    conference, webinar, or your company all-hands. Live streaming gives you a way to connect
                    with your employees, customers, and community. 
                   </p>
                </span>
                <span>
                <img src=''></img>
                </span>
              </div>
           </>
        )
    }
}

export default Ad;