import React, { useEffect, useState } from 'react'
import axios from '../../../boot/axios'
const Profile = () => {
  const [data , setData] = useState({})
  const getMe = () => {
    const url = "/user/getMe"
    axios.get(url).then(({data})=>{
      console.log(data)
      setData(data?.data)
    })
  }
  useEffect(getMe,[])
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-1">
          <p>نام : <span className="font-bold">{data?.firstName}</span></p>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p>نام خانوادگی : <span className="font-bold">{data?.lastName}</span></p>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <p>شماره تماس : <span className="font-bold">{data?.phone}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Profile