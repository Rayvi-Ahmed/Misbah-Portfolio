import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-8  bg-black/20 rounded-none backdrop-blur-2xl  text-white/50 text-white">
            <footer className="footer p-4 flex flex-1 lg:justify-between items-center">
                <div className="items-center grid-flow-col">
                    <a href="#">
                        <h1 className="text-3xl text-orange-500 font-bold">Misbah</h1>
                    </a>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>

                <div
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

                </div>
            </footer>
        </div>
    );
};

export default Footer;