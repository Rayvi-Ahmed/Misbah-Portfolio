import { FaHome, FaClipboard, FaBriefcase, FaChartBar, FaUser } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className="container mx-auto">
                <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
                    <Link to='home'
                        smooth={true}
                        spy={true}
                        activeClass='active'
                        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-purple-500'>
                        <FaHome></FaHome>
                    </Link>
                    <Link to='about'
                        smooth={true}
                        spy={true}
                        activeClass='active'

                        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-purple-500'>
                        <FaUser></FaUser>
                    </Link>
                    <Link to='project'
                        smooth={true}
                        spy={true}
                        activeClass='active'
                        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-purple-500'>
                        <FaBriefcase></FaBriefcase>
                    </Link>
                    <Link to='contact'
                        smooth={true}
                        spy={true}
                        activeClass='active'
                        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-purple-500'>
                        <FaClipboard></FaClipboard>
                    </Link>
                    <Link className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center hover:text-purple-500'>
                        <FaChartBar></FaChartBar>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;