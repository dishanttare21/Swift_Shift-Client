import './App.css'
import Navbar from './components/Navbar/Navbar'
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn'
import ShiftDetails from './components/ShiftDetails/ShiftDetails';
import ErrorPage from '../src/components/ErrorPage/ErrorPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { loginCall } from './apiCalls';
import { useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import Homepage from './pages/Homepage/Homepage';
import { useContext } from 'react';

function App() {
  const {user, dispatch} = useContext(AuthContext)
  //If app gets reloaded, repopulate contexts:
  useEffect(()=>{
    if(localStorage.getItem('credential')){
      const userCredentials ={}
      userCredentials['name'] = localStorage.getItem('name')
      userCredentials['email'] = localStorage.getItem('email')
      userCredentials['credential'] = localStorage.getItem('credential')
      userCredentials['picture'] = localStorage.getItem('picture')
      userCredentials['sub'] = localStorage.getItem('sub')
      loginCall(userCredentials,dispatch)
    }
    
  },[])
  //TODO remove useless o.p
  console.log(import.meta.env.google_client_id)
  return (
    <GoogleOAuthProvider clientId="617603549770-fle36dalh37g3t4rqan6h48r8h0kta42.apps.googleusercontent.com" >
    <Router>
      <Navbar />
      <Routes location={location} key={location.pathname}>
            {/* <Route path="/" element={user ? <Home /> : <Login />} /> */}
            <Route path="/login" element={<GoogleSignIn/>} />
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/profile/:userId" element={user ? <Profile /> : <Login />} /> */}
            <Route path='*' element={<ErrorPage />} />
            <Route path='/pageNotFound' element={<ErrorPage />} />
        </Routes>
    </Router>
    </GoogleOAuthProvider>
  )
}

export default App
