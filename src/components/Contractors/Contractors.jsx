import Contractor from '../Contractor/Contractor'
import './Contractors.css'
// import contractors from '../../utils/contractors.json'

const Contractors = (contractors) => {
    console.log(typeof(contractors),Object.values(contractors))
  return (
    <div className="contractors">
        <Contractor name={'STS movers and packers'} pricing={8} rating={4} />
        <Contractor name={'ABC Movers'} pricing={12} rating={5} />
        <Contractor name={'Home packers'} pricing={30} rating={2} />
        <Contractor name={'XYZ Shift'} pricing={5} rating={4} />
        <Contractor name={'STS movers and packers'} pricing={15} rating={1} />

        {/* {contractors.map( contractor => (
        <Contractor name={contractor.google_id} />
       ))}  */}
    </div>
  )
}

export default Contractors