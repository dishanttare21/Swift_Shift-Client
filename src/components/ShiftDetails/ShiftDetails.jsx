import './ShiftDetails.css'
import Contractors from '../Contractors/Contractors'
import { useRef } from 'react'
import axios from 'axios';
import { useState } from 'react';

const ShiftDetails = () => {
  const source = useRef();
  const destination = useRef(); 
  const data = [];
  const [contractors, setContractors] = useState([])
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
        const res = await axios.post('http://localhost:5000/contractors/matchedCriteria', {homeCity: source.current.value, destCity: destination.current.value})
        const data = await res.data.contractors;
        // console.log(data)
        setContractors(data)
        console.log(contractors)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
    <form action="" className="shiftDetails" onSubmit={handleSubmit} >
        <label htmlFor="source">Source</label>
        <input type="text" name='source' ref={source} />
        <label htmlFor="destination">Destination</label>
        <input type="text" name='destination' ref={destination} />
        <button className='save-btn'>Save</button>
    </form>

    <Contractors contractors={contractors} />
    </>
  )
}

export default ShiftDetails