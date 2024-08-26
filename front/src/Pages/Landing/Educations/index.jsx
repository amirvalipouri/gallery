import React, { useEffect, useRef, useState } from 'react'
import axios from '../../../boot/axios'
import { motion } from 'framer-motion'
import {  ymotion } from '../../../constants/frame-motion'
import EducationCard from './_components/EducationCard'
const Educations = () => {
    const ref = useRef()
    const [data, setData] = useState([])
    const getEducations = () => {
        const url = "/user/course"
        axios.get(url).then(({ data }) => {
            setData(data?.data)
        })
    }
    useEffect(getEducations, [])
    return (
        <div className="container">
            <motion.div ref={ref}
                variants={ymotion}
                initial="initial"
                whileInView="animate" className='grid grid-cols-4 gap-4'>
                {data?.map((e) =>
                    <div className='col-span-4 md:col-span-2 lg:col-span-1' key={e._id}>
                        <EducationCard {...e} />
                    </div>
                )}
            </motion.div>

        </div>
    )
}

export default Educations