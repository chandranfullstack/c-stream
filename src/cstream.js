import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import './cstream.css';
import Admin from './pages/admin/Admin';
import User from './pages/user/User';
import Uploadvideo from './pages/admin/uploadvideo';
import Adminplayer from './pages/admin/adminplayer';


class Cstream extends React.Component{
    constructor(){
        super()
    }


    render(){
        
        return(
            <>
              <div>
                <Router>
                <ul className='navbar navbar-expand-lg navbar-light fixed-top' id="mainlist">
                    
                    <li className='list' >
                        <Link className='link' style={{textDecoration:"none", color:"white",padding:"50px"}} to="/">HOME</Link>
                    </li>
                    <li className='list' >
                        <Link className='link' style={{textDecoration:"none", color:"white",padding:"50px"}} to="/login">LOG IN</Link>
                    </li>
                    <li className='list' id="nestList" >
                        <Link className='link' id="drop-menu" style={{textDecoration:"none", color:"white",padding:"50px"}} to="/register">REGISTER US</Link>
                        <ul id="dropdown-content">
                            <li className='List-content'><Link to="/user" state={{textDecoration:"none"}}>USER</Link></li>
                            <li className='List-content'><Link to="/admin" state={{textDecoration:"none"}}>ADMIN</Link></li>
                        </ul>
                    </li>
                    <li className='list' >
                        <Link className='link' style={{textDecoration:"none", color:"white",padding:"50px"}} to="/service">SERVICES</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/user' element={<User/>}></Route>
                    <Route path='/admin' element={<Admin/>}></Route>
                    <Route path='/service' element={<Services/>}></Route>
                    <Route path='/uploadvideo' element={<Uploadvideo/>}></Route>
                    <Route path='/adminplayer' element={<Adminplayer/>}></Route>
                </Routes>
                  <Outlet/>
                </Router>
              </div>
              
            </>
        )
    }
}


export default Cstream;