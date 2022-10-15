import HeroSection from '../../components/HeroSection/HeroSection'
import './Homepage.css'
import ShiftDetails from '../../components/ShiftDetails/ShiftDetails'
import Contact from '../../components/Contact/Contact'
const Homepage = () => {
  return (
    <div className='homepage'>
        <HeroSection />
        <Contact />
        {/* <section className='shiftDetails-section'>
          <ShiftDetails />
        </section> */}
    </div>
  )
}

export default Homepage