import React from 'react'

const Offer = ({src,link,index}) => {
  return (
    <a href={link}><img src={src} alt={`OFFER ${index}`} /></a>
  )
}

export default Offer 