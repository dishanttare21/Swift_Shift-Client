import  './Contractor.css'

const Contractor = ({name, pricing, rating}) => {
  return (
    <div className='contractor'>
        <span className='contractor-name'>{name}</span>
        <span className='contractor-pricing'><span className='key'>Pricing:</span> <span className='value'>{pricing} rs/km</span></span>
        <span className='contractor-rating'><span className='key'>User Rating</span>: <span className='value'>{rating}/5</span></span>

        <button className='view-btn'>View More</button>
    </div>
  )
}

export default Contractor