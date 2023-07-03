import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../Varient/Variants'
import img1 from '../assets/Summer-Rythm.png'
import img2 from '../assets/Kiddy Teddy.png'
import img3 from '../assets/Foodmode.png'
import img4 from '../assets/Job-portal site(assignment-09) P-01.png'
import img5 from '../assets/Justice-A-3.png'
import img6 from '../assets/Biker-Mania -BS.png'

const Works = () => {
    return (
        <section className="py-8 lg:py-24 lg:h-screen flex items-center lg:mb-10 text-white" id="work">
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='flex-1 flex flex-col gap-y-17 mb-10'>
                        <div>
                            <h2 className='text-accent leading-tight'>My Latest <br />
                                Work
                            </h2>
                            <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum libero maiores cum quisquam dolore ipsa accusantium fugit, quaerat quam?</p>

                        </div>

                        <button className='btn btn-sm'>get more info</button>

                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
                            <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-white/80 font-bold text-3xl'>Full stack website </span>
                            </div>
                            <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl font-bold text-white/80'>ProjectTitle</span>
                            </div>
                        </div>


                    </div>
                </div>


                <div className='flex-1'>
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
                        <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-white/80 font-bold text-3xl'>Full stack website </span>
                        </div>
                        <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                            <span className='text-3xl font-bold text-white/80'>ProjectTitle</span>
                        </div>
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
                        <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-white/80 font-bold text-3xl'>Full stack website </span>
                        </div>
                        <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                            <span className='text-3xl font-bold text-white/80'>ProjectTitle</span>
                        </div>
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
                        <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-white/80 font-bold text-3xl'>Full stack website </span>
                        </div>
                        <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                            <span className='text-3xl font-bold text-white/80'>ProjectTitle</span>
                        </div>
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
                        <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-white/80 font-bold text-3xl'>Full stack website </span>
                        </div>
                        <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                            <span className='text-3xl font-bold text-white/80'>ProjectTitle</span>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    );
};

export default Works;