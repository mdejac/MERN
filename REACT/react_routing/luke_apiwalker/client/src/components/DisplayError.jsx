import React from 'react'

import obiwanPic from '../not-the-droids-photo.jpeg';

const DisplayError = () => {
  return (
    <div className="d-flex mt-5 justify-content-center">
        <div>
            <h1>These aren't the droids you're looking for.</h1>
            <img src={obiwanPic} alt="obi wan"/>
        </div>
    </div>
  )
}

export default DisplayError