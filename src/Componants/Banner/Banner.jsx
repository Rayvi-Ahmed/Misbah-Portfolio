import { TypeAnimation } from 'react-type-animation';
import image from '../../assets/avatar.svg'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
const Banner = () => {
    return (


        <div className=" py-8 lg:py-24 lg:h-screen flex items-center text-white my-8" id="home">
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
                    <div className='flex-1 text-center lg:text-left'>
                        <h1 className='text-[50px] lg:text-[70px] font-bold leading-[0.8] mb-5 uppercase'>Misbah uddin</h1>
                        <div className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'>
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
                        </div>

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

                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;