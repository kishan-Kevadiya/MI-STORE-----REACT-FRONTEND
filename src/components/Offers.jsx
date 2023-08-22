import React from 'react'
import Offer from './Offer.jsx'
import '../style/offer.css'

const Offers = ({Offers}) => {
  return (
    <div className="offerSection">
        {
           Offers.map((item,index)=>(
               <Offer key={item.image} index={index} src={item.image} link={item.url} /> 
           )) 
        }
    </div>
  )
}

export default Offers