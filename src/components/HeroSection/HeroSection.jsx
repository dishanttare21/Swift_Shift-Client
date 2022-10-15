import { Link } from 'react-router-dom'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className="hero-section">
        <h1 className="hero1">Swift<span className='s'>Shift</span></h1>

        <Link to={'/shift'} className='start-btn'>Start Moving now</Link>
    </div>
  )
}

export default HeroSection