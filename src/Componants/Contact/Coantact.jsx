import { fadeIn } from '../../Varient/Variants'
import { motion } from 'framer-motion'
import { FaLocationArrow } from 'react-icons/fa';

const Coantact = () => {
    return (
        <div className=" py-8 lg:py-24 lg:h-screen flex items-center text-white" id="contact">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <motion.div
                            variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}


                        >
                            <h4 className='text-xl uppercase text-accent font-medium mb-2'>Get In touch</h4>
                            <h2 className='text-[45px] uppercase lg:[90px] leading-none mb-12'>Let's work <br></br>together</h2>

                        </motion.div>
                    </div>



                    <motion.form
                        variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' >
                        <input className='bg-transparent border-b outline-none w-full py-3 placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your name' />

                        <input className='bg-transparent border-b outline-none w-full py-3 placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your email' />


                        <textarea className='bg-transparent border-b outline-none w-full py-3 placeholder:text-white focus:border-accent transition-all resize-none' placeholder='Your Massage' name="" id="" cols="30" rows="10"></textarea>

                        <button className='btn btn-md'>Send Massage</button>


                    </motion.form>
                </div>



            </div>
        </div>
    );
};

export default Coantact;