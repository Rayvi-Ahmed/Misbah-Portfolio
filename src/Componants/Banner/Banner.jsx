import { TypeAnimation } from 'react-type-animation';
import image from '../../assets/avatar.svg'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeIn } from './Variants'

const Banner = () => {
    return (


        <div className='min-h-[85vh] lg:min-[78vh] flex items-center text-white' id="home">
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
                    <div className='flex-1 text-center lg:text-left'>
                        <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                            className='text-[50px] lg:text-[70px] font-bold leading-[0.8] mb-5 uppercase'>Misbah uddin</motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}


                            className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'>
                            <span className='mr-4'>Im a</span>
                            <TypeAnimation
                                sequence={[
                                    'developer',
                                    2000,
                                    'designer',
                                    2000,
                                    'learner',
                                    2000,
                                ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}


                            >
                            </TypeAnimation>
                        </motion.div>

                        <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolorum explicabo expedita repudiandae. Officia repellendus rem amet ut qui aspernatur saepe perferendis dolores sint voluptatem incidunt nihil asperiores autem enim necessitatibus, a porro nam maxime nesciunt et eos? Voluptatibus, vero?</p>

                        <div className='flex max-w-max gap-x-6 items-center lg:mb-6'>
                            <button className="btn p-2 rounded-lg">Contact Me</button>
                            <a href="#" className='text-gradient btn-link ml-4'>My Portfolio</a>
                        </div>

                        <div className='flex max-w-max gap-x-6 mx-auto lg:mx-0'>
                            <a href="#">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="#">
                                <FaLinkedin></FaLinkedin>
                            </a>
                            <a href="#">
                                <FaGithub></FaGithub>
                            </a>

                        </div>
                    </div>

                    <div className='hidden flex-1 lg:flex max-w-[320px] lg:max-w-[480px]'>
                        <img src={image} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;