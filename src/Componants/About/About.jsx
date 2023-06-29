import { motion } from 'framer-motion'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../../Varient/Variants'

const About = () => {
    const [ref, inview] = useInView({
        threshold: 0.5,
    })
    return (
        <div className="py-8 lg:py-24 lg:h-screen flex items-center text-white" ref={ref} id="about">
            <div className='container mx-auto'>
                <div
                    className='flex flex-col lg:flex-row gap-y-8 lg:items-center'>
                    <motion.div
                        variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                        className='bg-about bg-contain bg-no-repeat flex-1 h-[640px] mix-blend-lighten bg-top'></motion.div>

                    <motion.div
                        variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                        className='flex-1'>
                        <h1 className='text-accent font-semibold text-4xl mb-4'>About Me,</h1>
                        <h3 className='font-semibold text-3xl lg:mb-6'>Im a junior front end web developer with 1 years of experiance</h3>
                        <p className='font-semibold text-lg mb-5'>Having worked in React front-end development for over a year, I bring valuable experience and expertise to the table. I have a strong passion for creating user-friendly and visually appealing interfaces.i have completaed web development course from Proggramming Hero. My goal is to consistently deliver exceptional results by combining the latest technology with intuitive user experiences</p>

                        <div className='flex gap-x-8'>
                            <div>
                                <div className='text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover: from-[#FF56F6] hover:to-[#42A6E3];mb-2'>
                                    {inview ? <CountUp
                                        start={0} end={1} duration={3}
                                    >

                                    </CountUp> : null} +
                                </div>
                                <div className='font-bold text-sm tracking-[2px]'>
                                    years of <br></br>
                                    experience
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover: from-[#FF56F6] hover:to-[#42A6E3];mb-2'>
                                    {inview ? <CountUp
                                        start={0} end={9} duration={3}
                                    >

                                    </CountUp> : null} +
                                </div>
                                <div className='font-bold text-sm tracking-[2px]'>
                                    My total <br></br>
                                    Project
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover: from-[#FF56F6] hover:to-[#42A6E3];mb-2'>
                                    {inview ? <CountUp
                                        start={0} end={5} duration={3}
                                    >

                                    </CountUp> : null} +
                                </div>
                                <div className='font-bold text-sm tracking-[2px]'>
                                    Stisfied <br></br>
                                    Client
                                </div>
                            </div>
                        </div>


                    </motion.div>


                </div>
            </div>
        </div>
    );
};

export default About;