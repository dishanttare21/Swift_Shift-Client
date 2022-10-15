import HeroSection from '../../components/HeroSection/HeroSection'
import './Homepage.css'
import ShiftDetails from '../../components/ShiftDetails/ShiftDetails'
const Homepage = () => {
  return (
    <div className='homepage'>
        <HeroSection />
        <ShiftDetails />
    </div>
  )
}

export default Homepage