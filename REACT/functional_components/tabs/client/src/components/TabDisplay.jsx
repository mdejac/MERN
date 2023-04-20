import React from 'react'

const TabDisplay = ({displayMessage}) => {
  return (
    <div className='row'>
        <div className="col-md-6 offset-3 text-start border border-black">
            <p className='p-2' style={{minHeight:"500px" }}>{displayMessage}</p>
        </div>
    </div>
  )
}

export default TabDisplay