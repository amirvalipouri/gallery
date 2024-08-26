import React from 'react'
import './index.css'

const Ribbon = ({label = ""}) => {
  return (
    <div className="Ribbon2 right p-1">
        <p className="fs-15 fw-500 text-white mx-2 mb-1">{label}</p>
    </div>
  )
}

export default Ribbon