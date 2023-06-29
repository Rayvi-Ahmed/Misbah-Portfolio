import { fadeIn } from '../../Varient/Variants'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';


const Coantact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zj4ak1l', 'template_n2kj0lm', form.current, 'Ug3Cga1qMr10XADSm')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Email send sucessfully !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()

                }
            }, (error) => {
                console.log(error.text);
            });
    };


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

                        ref={form}
                        onSubmit={sendEmail}

                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' >
                        <input className='bg-transparent border-b outline-none w-full py-3 placeholder:text-white focus:border-accent transition-all' name="user_name" type="text" placeholder='Your name' />

                        <input className='bg-transparent border-b outline-none w-full py-3 placeholder:text-white focus:border-accent transition-all' name="user_email" type="text" placeholder='Your email' />


                        <textarea className='bg-transparent border-b outline-none w-full py-3 placeholder:text-white focus:border-accent transition-all resize-none' placeholder='Your Massage' name="message" id="" cols="30" rows="10"></textarea>

                        <button className='btn py-2'><input type="submit" value="send" /></button>


                    </motion.form>
                </div>



            </div>
        </div>
    );
};

export default Coantact;