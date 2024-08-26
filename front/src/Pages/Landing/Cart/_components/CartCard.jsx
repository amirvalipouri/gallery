import { Button } from 'antd'
import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa";
import axios from '../../../../boot/axios'
import { source, toast } from '../../../../methods';
import { useNavigate } from 'react-router-dom';
import { CartCountContext } from '../../../../context/cartcount';
const CartCard = ({ _id, title, image , update = () => {} }) => {
    const navigate = useNavigate()
    const [ count , setCount ] = useContext(CartCountContext)

    const deleteItems = () => {
        console.log("sdfsdf",title)
        const body = { data: { courseId: _id } };

        const url = "/user/cart/remove"
        axios.delete(url,body).then(({data})=>{
            console.log(data)
            toast({text : data?.message})
            setCount(p => p-1)
            return update()
        })
    }
    return (
        <div className="w-full shadow rounded-lg border p-4">
            <img className='w-24 h-24 mx-auto' src={source(image)} alt={title} />
            <p className="my-2 text-center">{title}</p>
            <Button type='primary' className='w-full' onClick={deleteItems} danger><FaTrash /></Button>
        </div>
    )
}

export default CartCard