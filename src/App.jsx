import './App.css'
import Navbar from './components/Navbar/Navbar'
import React from "react";
import ShiftDetails from './components/ShiftDetails/ShiftDetails';
import ErrorPage from '../src/components/ErrorPage/ErrorPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes location={location} key={location.pathname}>
            {/* <Route path="/" element={user ? <Home /> : <Login />} /> */}
            <Route path="/" element={<ShiftDetails />} />
            {/* <Route path="/profile/:userId" element={user ? <Profile /> : <Login />} /> */}
            <Route path='*' element={<ErrorPage />} />
            <Route path='/pageNotFound' element={<ErrorPage />} />
        </Routes>
    </Router>
   
  )
}

export default App
