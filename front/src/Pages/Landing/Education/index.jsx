import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { source, toast } from '../../../methods';
import axios from '../../../boot/axios'
import { Button } from 'antd';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { CartCountContext } from '../../../context/cartcount';

const Education = () => {
  const [ count , setCount ] = useContext(CartCountContext)

  const [data, setData] = useState({})
  const isLogged = useSelector((s) => s.isLogged);
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id
  const getImages = () => {
    const url = `user/course/${id}`
    axios.get(url).then(({ data }) => {
      setData(data?.data)
    })
  }
  const addToCard = () => {
    if(!isLogged){
        let text = "لطفا ابتدا وارد سایت شوید"
        toast({text , type : "error"})
        return navigate("/auth/signin")
    }
    const url = "/user/cart/addToCard"
    const body = {courseId : data?._id}
    axios.post(url,body).then(({data})=> {
      setCount(p => p+1)
      return toast({text : data?.message})
    })
  }
  useEffect(getImages, [])
  return (
    <div className="container">
      <div className="grid grid-cols-8 gap-4 p-4 shadow rounded-lg my-4 bg-gray-100">
        <div className="col-span-8 md:col-span-2 flex justify-center items-center">
          <img src={source(data?.image)} className='w-full h-auto lg:w-48 lg:h-48 object-cover my-4' />
        </div>
        <div className='col-span-8 md:col-span-6 flex flex-col justify-between py-4'>
          <p className="font-bold text-2xl">{data?.title}</p>

          <p>قیمت : <span className="font-bold my-2">{data?.price == 0 ? "رایگان" : `${data?.price?.toLocaleString()} تومان`} </span></p>
          <p>نام استاد : <span className="font-bold my-2">{data?.teacher}</span></p>
          <p>مدت دوره : <span className="font-bold my-2">{data?.time}</span></p>

          <p className="text-gray-400">{data?.description}</p>
          <Button onClick={addToCard} className="w-48" type='primary'> <FiShoppingCart/> اضافه به سبد خرید</Button>
        </div>
      </div>

    </div>
  )
}

export default Education