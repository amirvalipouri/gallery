import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { IoIosTime , IoIosPricetags } from "react-icons/io";
import { source } from '../../../../methods';
import Ribbon from '../../../../Components/Ribbon';

const EducationCard = ({title , teacher , _id , time , price , image , available}) => {
  return (
    <Link to={`/educations/${_id}`}>
        <div className="rounded-lg relative overflow-hidden shadow w-full min-h-[300px]">
            {!available && <Ribbon label='به زودی'/>}
            <img src={source(image)} alt={title} className='w-full rounded-b-lg' />
            <div className='p-4'>
                <p className="font-bold text-lg text-center my-2">{title}</p>
                <div className='flex items-center justify-start my-1'>
                    <FaUserTie size={20}/>
                    <p className='mx-2'>{teacher}</p>
                </div>
                <div className='flex items-center justify-start my-1'>
                    <IoIosTime size={20}/>
                    <p className='mx-2'>{time} ساعت</p>
                </div>
                <div className='flex items-center justify-start my-1'>
                    <IoIosPricetags size={20}/>
                    <p className='mx-2'>{price == 0 ? <span className="text-green-500 font-bold">رایگان</span> : `${price?.toLocaleString()} تومان`} </p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default EducationCard