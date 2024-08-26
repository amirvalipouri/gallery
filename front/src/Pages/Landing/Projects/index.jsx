import React, { useEffect, useRef, useState } from 'react'
import axios from '../../../boot/axios'
import ProjectCard from './_components/ProjectCard'
import { motion } from 'framer-motion'
import {  ymotion } from '../../../constants/frame-motion'
const Projects = () => {
    const ref = useRef()
    const [data, setData] = useState([])
    const getCategories = () => {
        const url = "/user/category"
        axios.get(url).then(({ data }) => {
            setData(data?.data)
        })
    }
    useEffect(getCategories, [])
    return (
        <div className="container">
            <motion.div ref={ref}
                variants={ymotion}
                initial="initial"
                whileInView="animate" className='grid grid-cols-4'>
                {data?.map((e) =>
                    <div className='col-span-4 md:col-span-2 lg:col-span-1' key={e._id}>
                        <ProjectCard {...e} />
                    </div>
                )}
            </motion.div>

        </div>
    )
}

export default Projects