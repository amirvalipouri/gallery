import React, { useEffect, useState } from 'react'
import axios from '../../../boot/axios'
import CartCard from './_components/CartCard'
import { Button } from 'antd'
import { toast } from '../../../methods'
const Cart = () => {
  const [cart, setCart] = useState({})
  
  const getCart = () => {
    const url = "/user/cart"
    axios.get(url).then(({ data }) => {
      setCart(data?.data[0])
    })
  }
  const addPurchase = () => {
    const url = `/user/cart/${cart?._id}`
   
    axios.post(url).then(({data})=>{
      return toast({text : data?.message})
    })
  }
  useEffect(getCart, [])
  if (!cart) return <p className="text-center font-bold text-blue-500">سبد خرید خالی است</p>
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 lg:col-span-3">
          
          <div className="border shadow rounded-lg p-4 grid grid-cols-3">
            <p className="col-span-3 my-4 font-bold text-blue-500">دوره های انتخاب شده</p>
            {cart?.items?.map((e) =>
              <div className="col-span-3 lg:col-span-1" key={e?._id}>
                <CartCard update={getCart}  {...e.course} />
              </div>
            )}
          </div>

        </div>
        <div className="col-span-4 lg:col-span-1">
          <div className="w-full border rounded-lg p-4">
            <p>قیمت کل : <span className="font-bold">{cart?.totalPrice?.toLocaleString()} تومان</span></p>
            <p>تعداد کل : <span className="font-bold">{cart?.totalCount} عدد</span></p>
            <Button onClick={addPurchase} className='w-full mt-4' type='primary'>تکمیل خرید</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart