import html from '../../assets/html.png'
import css from '../../assets/CSS.png'
import firebase from '../../assets/Firebase.png'
import github from '../../assets/github.png'
import javascript from '../../assets/js.png'
import tailwind from '../../assets/Tailwind.png'
import momngo from '../../assets/MongoDB-Logo.png'
import nodejs from '../../assets/nodeJs.jpg'
import reactImg from '../../assets/react.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Varient/Variants'



const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-600"
        },
        {
            id: 3,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-600"
        },
        {
            id: 4,
            src: javascript,
            title: "Javasript",
            style: "shadow-yellow-400"
        },
        {
            id: 5,
            src: reactImg,
            title: "React",
            style: "shadow-blue-500"
        },
        {
            id: 6,
            src: momngo,
            title: "Mong0Db",
            style: "shadow-green-400"
        },
        {
            id: 7,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-600"
        },
        {
            id: 8,
            src: nodejs,
            title: "NodeJs",
            style: "shadow-green-500"
        },
        {
            id: 9,
            src: github,
            title: "GitHub",
            style: "shadow-white"
        },
    ]

    return (
        <motion.div
            variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

            className="py-8 lg:py-24 lg:h-screen flex items-center text-white" id="sakil">
            <div className='container mx-auto flex flex-col justify-center p-4'>
                <div>
                    <h1 className='font-bold text-3xl text-accent border-b border-gray-500 p-2 inline'>My Skills</h1>
                    <p className='p-6 text-white/70 font-semibold text-lg'> There my technilogies i have worked with to build an application</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p>{title}</p>
                            </div>
                        ))
                    }

                </div>


            </div>
        </motion.div>
    );
};

export default Skills;