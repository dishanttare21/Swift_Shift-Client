import './ShiftDetails.css'
import Contractors from '../Contractors/Contractors'
import { useRef } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ShiftDetails = () => {
  const source = useRef();
  const destination = useRef(); 
  const data = [];
  const [contractors, setContractors] = useState([])

  const [submitted, setSubmitted] = useState(false);

  const {user} = useContext(AuthContext)
//   setContractors({})
//   console.log(typeof(contractors))
  /*
  
    {
        "contractor_id" : 1,
        "contractor_name" : "Contractor 1",
        "pricing" : "8rs/km"
    },
    {
        "contractor_id" : 2,
        "contractor_name" : "Contractor 1",
        "pricing" : "8rs/km"
    },
    {
        "contractor_id" : 3,
        "contractor_name" : "Contractor 1",
        "pricing" : "8rs/km"
    },
    {
        "contractor_id" : 4,
        "contractor_name" : "Contractor 1",
        "pricing" : "8rs/km"
    }
]);*/
    // console.log(typeof(contractors))
    const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        await axios.put('http://localhost:5000/users/updateCity', {homeCity: source.current.value, destCity: destination.current.value, credential: user?.credential})

        const res = await axios.post('http://localhost:5000/contractors/matchedCriteria', {homeCity: source.current.value, destCity: destination.current.value})
        const data = await res.data.contractors;
        // console.log(data)
        setContractors(data)
        console.log(contractors)
        setSubmitted(true)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
    <form action="" className="shiftDetails" onSubmit={handleSubmit} >
        <div>
        <label htmlFor="source">Source City</label>
        <input type="text" name='source' ref={source} required />
        </div>
        <div>
        <label htmlFor="destination">Destination City</label>
        <input type="text" name='destination' ref={destination} required />
        </div>
        <button className='save-btn'>Save</button>
    </form>

    {submitted && (
      <Contractors contractors={contractors} />
    )}
    </>
  )
}

export default ShiftDetails