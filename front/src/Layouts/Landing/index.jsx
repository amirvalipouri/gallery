import React from 'react'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
import { Footer } from 'antd/es/layout/layout'
import './index.css'
const LandingLayout = () => {
  return (
    <div className="min-h-screen Landing  grid grid-rows-[98px_1fr_auto]">
        <Headers/>
        <main className="my-8">
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default LandingLayout