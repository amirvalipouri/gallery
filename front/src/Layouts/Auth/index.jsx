import React from 'react'
import { Outlet } from 'react-router-dom'
import photo from '../../assets/images/photo.jpg'
const AuthLayout = () => {
  return (
    <div className="w-full h-screen grid grid-cols-4">
        <div className="col-span-4 md:col-span-1 flex items-center justify-center p-4">
            <Outlet />
        </div>
        <div className="col-span-3 md:block hidden w-full h-screen">
            <img src={photo} alt='photographer' className="w-full h-screen object-cover" />
        </div>
    </div>
  )
}

export default AuthLayout