import React, { useRef } from 'react'
import one from "../../../assets/images/1.jpg"
import two from "../../../assets/images/2.jpg"
import three from "../../../assets/images/3.jpg"
import four from "../../../assets/images/4.jpg"
import five from "../../../assets/images/5.jpg"
import six from "../../../assets/images/6.jpg"
import seven from "../../../assets/images/7.jpg"
import eight from "../../../assets/images/8.jpg"
import nine from "../../../assets/images/9.jpg"
import ten from "../../../assets/images/10.jpg"
import eleven from "../../../assets/images/11.jpg"
import twelve from "../../../assets/images/12.jpg"
import p13 from "../../../assets/images/13.jpg"

import { motion } from 'framer-motion'
import { scalemotion } from '../../../constants/frame-motion'
const Home = () => {
  const ref = useRef()

  const data = [
    {
      src : one
    },
    {
      src : two
    },
    {
      src : three
    },
    {
      src : four
    },
    {
      src : five
    },
    {
      src : six
    },
    {
      src : seven
    },
    {
      src : eight
    },
    {
      src : nine
    },
    {
      src : ten
    },
    {
      src : eleven
    },
    {
      src : twelve
    },
    {
      src : p13
    },
  ]
  return (
    <div className="container">
      <motion.div ref={ref}
        variants={scalemotion}
        initial="initial"
        whileInView="animate" class="columns-1 gap-2 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-5 [&>img:not(:first-child)]:mt-8">
        {data.map((e,i) =>
          <motion.img whileHover={{scale : 1.02}} transition={{duration : 0.5}} variants={scalemotion} key={i} loading='lazy' src={e.src} alt='wallpaper' className="w-full" />
        )}
      </motion.div>
    </div>
  )
}

export default Home