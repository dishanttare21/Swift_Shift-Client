import  './Contractor.css'

const Contractor = ({name, pricing, rating}) => {
  return (
    <div className='contractor'>
        <div>
          <img className='contractor-image' src={`https://images.unsplash.com/photo-1658325387998-d14f37f408e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`} alt="" />
          <span className='contractor-name'>{name}</span>
        </div>
        <div className='contractor-details'>
          <div className='contractor-pricing'><span className='key'>Contact:</span> <span className='value'>{9075316201}</span></div>
          <div className='contractor-rating'><span className='key'>User Rating</span>: <span className='value'>{rating}/5</span></div>
          
        </div>
        <div className='contractor-details'>
        <span className='contractor-pricing'><span className='key'>Pricing:</span> <span className='value'>{pricing} rs/km</span></span>
          <span className='contractor-rating'><span className='key'>Insurance Fees</span>: <span className='value'>500</span></span>
        </div>
        <button className='view-btn'>Select</button>
    </div>
  )
}

export default Contractor