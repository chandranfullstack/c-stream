import React from 'react';
import './style/bottom.css';


class Bottom extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
        <>
        <div id='bottompage'>
            <ul>
              <h4>Contact Us</h4>
              <li><a href="mailto:ravichan997@gmail.com">send mail</a></li>
              <li><a href='tel:+918220513662'>Phone</a></li>
              <li><a href='https://www.facebook.com/'>Facebook</a></li>
              <li><a href='https://twitter.com/login'>Twitter</a></li>
              <li><a href='https://www.instagram.com/'>Instagram</a></li>
            </ul>
            <ul>
            <h4>What's New</h4>
            <li><a href='#'>Live</a></li>
            <li><a href='#'>Movies</a></li>
            <li><a href='#'>virtual events</a></li>
            <li><a href='#'>screen recoding</a></li>
            <li><a href='#'>webinar</a></li>
          </ul>
          <ul>
          <h4>About</h4>
          <li><a href='#'>Live stream now</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Production</a></li>
          <li><a href='#'>Subcription</a></li>
          <li><a href='#'>Developer content</a></li>
        </ul>
        </div>
        </>
        )
    }
}

export default Bottom;