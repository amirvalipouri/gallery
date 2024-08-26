import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import axios from '../../../boot/axios'
const UserPurchase = () => {
    const [data, setData] = useState([])
    const getUserPurchase = () => {
        const url = "/user/cart/purchase"
        axios.get(url).then(({ data }) => {
            setData(data?.data)
        })
    }
    // const showCourses = (data) => {
    //     const res = data?.map((e) => e?.title).join("-")
        
    //     return res
    // }
    useEffect(getUserPurchase, [])
    return (
        <div className="w-full">
            <p className='font-bold text-lg mb-4'>خریدهای من</p>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table  className="w-full text-sm text-left rtl:text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-right">
                                محصول
                            </th>
                            <th scope="col" className="px-6 py-3 text-right">
                                قیمت
                            </th>
                            <th scope="col" className="px-6 py-3 text-right">
                                تعدادکل
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((e)=>
                            <tr key={e?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 text-right dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{e?.items?.map((i) => `${i.course?.title} (${i.count} عدد)`).join(" - ")}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{e?.totalPrice}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{e?.totalCount}</td>
                           </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserPurchase