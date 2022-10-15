import axios from "axios";
import jwt from "jwt-decode"

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        console.log('Triggered')
        //Store the access token and refresh token sent by the server in localStorage(warning: vulnerable to XSS):
        localStorage.setItem('name',userCredentials.name)
        localStorage.setItem('email',userCredentials.email)
        localStorage.setItem('credential' , userCredentials.credential)
        localStorage.setItem('picture',userCredentials.picture)
        localStorage.setItem('sub',userCredentials.sub)
        
        //Store the user in a reducer:
        dispatch({ type: "LOGIN_SUCCESS", payload: userCredentials });
    } catch (error) {
        console.log(error.response)
        let message='Failed to communicate with the server!'
        if(error.response)
            message=error.response.data
        dispatch({ type: "LOGIN_FALIURE", payload: message });
    }
}

export const logoutCall = async (dispatch) => {
   
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('credential')
        localStorage.removeItem('picture')
        localStorage.removeItem('sub')
        
    //Clear details about the user:
    dispatch({ type: "LOGOUT" })
}