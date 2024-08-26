import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Badge, Space } from 'antd';
import { FiShoppingCart } from "react-icons/fi";
import axios from '../../boot/axios'
import { CartCountContext } from '../../context/cartcount';
const CartCount = () => {
    const [ count , setCount ] = useContext(CartCountContext)
   
    const showCount = () =>{
        if(count == undefined) return 0
        return count <= 9 ? count : `+${count}`;
    }
    return (
        <div className="">
            <Badge count={showCount()} showZero>
                <FiShoppingCart />
            </Badge>
        </div>
    )
}

export default CartCount