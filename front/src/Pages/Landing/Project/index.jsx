import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../../boot/axios'
import { scalemotion, xmotion } from '../../../constants/frame-motion';
import { motion } from 'framer-motion';
import { source } from '../../../methods';
const Project = () => {
  const ref = useRef()
  const [image, setImage] = useState([])
  const params = useParams();
  const id = params.id
  const getImages = () => {
    const url = `user/image/${id}`
    axios.get(url).then(({ data }) => {
      setImage(data?.data)
    })
  }
  useEffect(getImages, [])
  return (
    <div className="container">
      {image && 
        <motion.div ref={ref}
          variants={xmotion}
          initial="initial"
          whileInView="animate" className='grid grid-cols-4 gap-4'>
          {image?.map((e) =>
            <motion.div  className='col-span-4 md:col-span-2 lg:col-span-1 ' key={e._id}>
              <img loading='lazy' className="w-full object-cover h-48" src={source(e?.image)} />
            </motion.div>
          )}
        </motion.div>
      }
    </div>
  )
}

export default Project