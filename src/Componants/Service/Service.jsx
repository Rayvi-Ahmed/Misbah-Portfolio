import { fadeIn } from '../../Varient/Variants'
import { motion } from 'framer-motion'
import { FaLocationArrow } from 'react-icons/fa';

const Service = () => {
    const services = [
        {
            name: " UI / UX design",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        },
        {
            name: "PSD to HTML",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        },
        {
            name: "Ecommerce Website",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        },
        {
            name: "Search engine Optimization",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        }

    ]

    return (
        <div className="py-8 lg:py-24 lg:h-screen flex items-center lg:mb-10 text-white" id="service">
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('down', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>


                        <h1 className='font-bold text-3xl text-accent p-2 inline  mb-6'>What I do</h1>
                        <h3 className='font-semibold text-lg max-w-[456px] mb-16'>I have doing some full stack & front end projehct during my learinng period.Building full stack project using technologes & some development tools. Also implement firebase authentication, JWT to secured route. As well as implement payment gatgway one of my projects. </h3>
                        <button className='btn p-2 rounded-lg'>Hire me </button>

                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }}

                        className='flex-1'>
                        {

                            services.map((service, index) => {
                                const { name, description, link } = service
                                return (

                                    <div className='border-b border-white/20 h-[150px] mb-[38px] flex ' key={index}>
                                        <div className='max-w-[476px]'>
                                            <h4 className='text-[20px] tracking-winder font-primary font-semibold mb-6'>{name}</h4>
                                            <p className='font-secendary leading-tight'>{description}</p>
                                        </div>
                                        <div className='flex flex-col flex-1 item-end'>
                                            <a className='w-9 h-9 p-3 rounded-lg btn mb-[42px] flex-center items-center' href="#">
                                                <FaLocationArrow></FaLocationArrow>
                                            </a>
                                            <a className='text-sm text-purple-600 font-semibold' href="#">{link}</a>

                                        </div>

                                    </div>
                                )

                            })
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Service;