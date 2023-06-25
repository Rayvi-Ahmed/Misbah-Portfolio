import { fadeIn } from '../../Varient/Variants'
import { motion } from 'framer-motion'

const Service = () => {
    const services = [
        {
            name: " UI / UX design",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        },
        {
            name: " UI / UX design",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        },
        {
            name: " UI / UX design",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        },
        {
            name: " UI / UX design",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore! Vero, quam aliquam? Obcaecati labore laboriosam, repellendus officiis totam magni',
            link: 'learn more'
        }

    ]

    return (
        <div className="py-8 lg:py-24 lg:h-screen flex items-center text-white" id="service">
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>
                        <h1 className='font-semibold text-4xl text-accent mb-6'>What i do</h1>
                        <h3 className='font-semibold text-lg max-w-[456px] mb-16'>Im a junior front end web developer with 1 years of experiance</h3>
                        <button className='btn p-2 rounded-lg'>Hire me </button>

                    </div>
                    <div>
                        {

                            services.map(service, index)=>{
                    return(
                        <div key={index}>
                            <div>text</div>
                            <div>Link</div>
                        </div>
                        )
                        }
                        }
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Service;