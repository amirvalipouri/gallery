import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ymotion } from '../../../constants/frame-motion'
import axios from '../../../boot/axios'
import CameraCard from './_components/CameraCard'
const Cameras = () => {
    const ref = useRef()
    const [data, setData] = useState([])
    const getCameras = () => {
        const url = "/user/camera"
        axios.get(url).then(({ data }) => {
            setData(data?.data)
        })
    }
    useEffect(getCameras, [])
    return (
        <div className="container">
            <motion.div ref={ref}
                variants={ymotion}
                initial="initial"
                whileInView="animate" className='grid grid-cols-4 gap-2 z-10'>
                {data?.map((e) =>
                    <div className='col-span-4 md:col-span-2  lg:col-span-1' key={e._id}>
                        <CameraCard {...e} />
                    </div>
                )}
            </motion.div>

        </div>
    )
}

export default Cameras