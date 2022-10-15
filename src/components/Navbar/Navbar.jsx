import './Navbar.css'
import jwt_decode from "jwt-decode"
import { loginCall,logoutCall } from '../../apiCalls';
import { gapi } from 'gapi-script';
import { loadAuth2, loadAuth2WithProps, loadClientAuth2 } from 'gapi-script';
import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'

const Navbar = () => {
    const {user,dispatch} = useContext(AuthContext)
    console.log(user)
    const logout = ()=>{
        //https://accounts.google.com/Logout?ec=GAdAwAE
        logoutCall(dispatch)
        window.open('https://accounts.google.com/Logout')
    }

  return (
    <nav className="navbar">
        <div className="navbar-left">
            <img src="/assets/images/SS.png" alt="" className='logo' />
            {/* <span className='title'>Swift Shift</span> */}
        </div>

        <div className="navbar-center">
            <ul className='navbar-links'>
               <li className="navbar-link">Home</li>
               <li className="navbar-link">Services</li>
               <li className="navbar-link">Contact</li>
               <li className="navbar-link">About</li>
            </ul>
        </div>

        <div className="navbar-right">
            {user == null ?<GoogleLogin
                onSuccess={credentialResponse => {
                var decoded = jwt_decode(credentialResponse.credential)
                console.log(decoded)
                loginCall({
                    name: decoded.name,
                    email:decoded.email,
                    credential: credentialResponse.credential,
                    picture: decoded.picture,
                    sub: decoded.sub
                },dispatch)
            }}
            onError={() => {
                console.log('Login Failed');
            }}/> :

            <button className="logout-btn" onClick={logout}>Logout</button>
        }
        </div>
    </nav>
  )
}

export default Navbar