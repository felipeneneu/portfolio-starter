import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
//motion
import { motion } from 'framer-motion'
//variant
import { fadeIn } from '../variants'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from "swiper/modules";
import { PurpleImages } from "../imagesdoslider";

import { RxArrowRight } from 'react-icons/rx'

const Slider = () => {
    return (
        <section className='section' id='work'>
            <div className=' container mx-auto flex flex-col md:flex-row gap-5 items-center justify-center' >
                <motion.div
                    variants={fadeIn('right', 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-col gap-3">
                    <h2 className=" text-[50px] font-semibold h2 text-accent mb-6">
                        My Work.
                        <p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400 mt-6">
                            Confira meus ultimos trabalhos!
                        </p>
                    </h2>
                </motion.div>
                <div className="w-[70%] md:w-[70%]">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            992: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            }
                        }}
                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[FreeMode, Pagination]}
                    >
                        <SwiperSlide className='mb-14'>
                            <div className="grid grid-cols-2 gap-4  px-10">
                                {PurpleImages.map((image) => (
                                    <div className="relative group" key={image.src}>

                                        <img
                                            src={image.src}
                                            alt="purple img"
                                            className="rounded-md h-[240px] w-[340px] object-cover"
                                        />
                                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 rounded-md">
                                            <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                                View Project
                                                <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                                            </div>

                                        </div>

                                    </div>
                                ))}
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='mb-14'>
                            <div className="grid grid-cols-2 gap-4  px-10">
                                {PurpleImages.map((image) => (
                                    <div className="relative group" key={image.src}>

                                        <img
                                            src={image.src}
                                            alt="purple img"
                                            className="rounded-md h-[240px] w-[340px] object-cover"
                                        />
                                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 rounded-md">
                                            <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                                View Project
                                                <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                                            </div>

                                        </div>

                                    </div>
                                ))}
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Slider