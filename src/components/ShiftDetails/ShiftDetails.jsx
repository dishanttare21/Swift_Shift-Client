import './ShiftDetails.css'
import Contractors from '../Contractors/Contractors'
const ShiftDetails = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }
  return (
    <>
    <form action="" className="shiftDetails" onClick={(e) =>handleSubmit(e)}>
        <label htmlFor="">From</label>
        <input type="text" />
        <label htmlFor="">To</label>
        <input type="text" />
        <button>Save</button>
    </form>

    <Contractors />
    </>
  )
}

export default ShiftDetails