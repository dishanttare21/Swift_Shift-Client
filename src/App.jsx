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

import Homepage from './pages/Homepage/Homepage';

function App() {
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
