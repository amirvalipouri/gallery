import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { source } from '../../../methods';
import axios from '../../../boot/axios'
const Camera = () => {
  const [data, setData] = useState({})
  const params = useParams();
  const id = params.id
  const getImages = () => {
    const url = `user/camera/${id}`
    axios.get(url).then(({ data }) => {
      console.log(data?.data)
      setData(data?.data)
    })
  }
  useEffect(getImages, [])
  return (
    <div className="container">
      <div className="grid grid-cols-8 gap-4 p-2 shadow-xl rounded-lg my-4">
        <div className="col-span-8 md:col-span-2 flex justify-center items-center">
          <img src={source(data?.image)} className='w-full h-auto lg:w-48 lg:h-48 object-cover my-8' />
        </div>
        <div className='col-span-8 md:col-span-6 flex flex-col justify-center'>
          <p className="font-bold text-2xl">{data?.name}</p>

          <p>قیمت : <span className="font-bold ">{data?.price?.toLocaleString()} تومان</span></p>
          <p>رزولوشن : <span className="font-bold ">{data?.resolution}</span></p>
          <p>کد : <span className="font-bold ">{data?.code}</span></p>

          <p className="text-gray-400">{data?.desc}</p>
        </div>
      </div>

    </div>
  )
}

export default Camera