import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { loginCall, logoutCall } from '../../apiCalls';
import jwt_decode from "jwt-decode"
const GoogleSignIn = ()=>{
    const {user,dispatch} = useContext(AuthContext)
    
    const logout = ()=>{
        googleLogout()
        logoutCall(dispatch)
    }

    return(
        <div className="loginContainer">
            <GoogleLogin
            onSuccess={credentialResponse => {
            console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap/>;

            <GoogleLogin
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
            }}/>
            <button onClick={logout}> Sign out</button>

        </div>    
    )
}
export default GoogleSignIn