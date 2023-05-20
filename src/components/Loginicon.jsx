import React from 'react'

import backgroundImage from '../Images/icon.png'

const Loginicon = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
      };

      
  return (
    <div>
       
       <div className=" mt-8" style={divStyle}></div>
    </div>
  )
}

export default Loginicon