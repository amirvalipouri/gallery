import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import calltous from '../../../constants/_callToUs';
import CallToUsCard from './_components/CallToUsCard';
const CallTous = () => {
    const ref = useRef()
    const variants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    };
    return (
        <div className="w-full min-h-screen">
            <div className='relative h-[250px] py-4 container mx-2'>
                <p className="text-[#09214E] text-[46px] font-extrabold	">تماس با ما</p>
            </div>
            <motion.div ref={ref}
                variants={variants}
                initial="initial"
                whileInView="animate" className='bg-white relative min-h-[500px] py-8'>
                <div className="container">
                    <div style={{ top: "-150px" }} className='w-full relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16'>
                        {calltous.map((e) =>
                            <motion.div variants={variants} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} key={e.src} className='col-span-1 flex justify-center'>
                                <CallToUsCard {...e} />
                            </motion.div>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className='col-span-3 lg:col-span-1'>
                            <div>
                                <p className='text-black font-bold text-base my-2'>دفتر مرکزی : </p>
                                <p>
                                    ملایر - میدان امام  - خیابان شاه نظری - برج
                                    ناهید - طبقه ۳ - واحد
                                </p>
                            </div>
                            <div className='my-4'>
                                <p className='text-black font-bold text-base my-2'>تلفن : </p>
                                <p>
                                    22277550
                                </p>
                                <p>
                                    22277550
                                </p>
                            </div>
                        </div>
                        <div className='col-span-3 lg:col-span-2 flex items-center justify-start'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1678.9912982300946!2d51.183173276149624!3d35.71338929068993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1702716232538!5m2!1sen!2s" width="100%" height="285" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default CallTous