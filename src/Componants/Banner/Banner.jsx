import { TypeAnimation } from 'react-type-animation';
import image from '../../assets/bannerGlass.png'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeIn } from '../././././../Varient/Variants'
import { Link } from 'react-scroll'

const Banner = () => {
    return (
        <div className='min-h-[85vh] lg:min-[78vh] flex items-center text-white' id="home">
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
                    <div className='flex-1 text-center lg:text-left'>
                        <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                            className='text-[50px] lg:text-[60px] font-bold leading-[0.8] mb-5 uppercase'>Misbah uddin</motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}


                            className='mb-6 text-[36px] lg:text-[45px] font-semibold uppercase leading-[1]'>
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

                        <motion.p
                            variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                            className='mb-6 lg:max-w-[80%]'>Driven and ambitious React junior front-end developer with a passion for creating dynamic and engaging user interfaces. With a solid foundation in HTML, CSS, and JavaScript, I possess a strong understanding of React's core principles and its ecosystem. Eager to expand my skillset and contribute to innovative projects, I bring a collaborative mindset and a willingness to learn from experienced mentors. Committed to delivering high-quality code and continuously improving my craft, I am poised to make a positive impact in the world of front-end development</motion.p>

                        <motion.div
                            variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                            className='flex max-w-max gap-x-6 items-center lg:mb-6'>
                            <Link to='contact'
                                smooth={true}
                                spy={true}
                                activeClass='active'
                            ><button className="btn p-2 rounded-lg">Contact Me</button></Link>
                            <Link
                                to='project'
                                smooth={true}
                                spy={true}
                                activeClass='active'

                            >
                                <a href="#" className='text-gradient btn-link ml-4'>My Portfolio</a>
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                            className='flex max-w-max gap-x-6 mx-auto lg:mx-0 lg:text-3xl'>
                            <a href="https://facebook.com/rayvikhan">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="https://www.linkedin.com/in/seo-expert-rayvi-ahmed-5b13a31a5/">
                                <FaLinkedin></FaLinkedin>
                            </a>
                            <a href="https://github.com/Rayvi-Ahmed">
                                <FaGithub></FaGithub>
                            </a>

                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                        className='hidden flex-1 lg:flex max-w-[320px] lg:max-w-[480px]'>
                        <img className='w-[600px] h-[550px] border-b-4 rounded-full border-indigo-500' src={image} alt="" />
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Banner;