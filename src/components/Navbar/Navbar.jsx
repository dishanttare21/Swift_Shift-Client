import './Navbar.css'
import { gapi } from 'gapi-script';
import { loadAuth2, loadAuth2WithProps, loadClientAuth2 } from 'gapi-script';
import axios from 'axios'
const Navbar = () => {

    const login = async() => {
        const res = await axios.post('/login')
        const data = res.json();
        console.log(data)
    }

  return (
    <nav className="navbar">
        <div className="navbar-left">
            <span className='title'>Swift Shift</span>
        </div>

        <div className="navbar-center">
            <ul className='navbar-links'>
               <li className="navbar-link">Home</li>
               <li className="navbar-link">Services</li>
               <li className="navbar-link">Contact</li>
            </ul>
        </div>

        <div className="navbar-right">
            <button onClick={login}>Login</button>
        </div>
    </nav>
  )
}

export default Navbar