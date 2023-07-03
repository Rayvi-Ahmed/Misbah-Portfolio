import React from 'react';
import {
    FaGithub,
} from 'react-icons/fa';
import {
    BiWorld,
} from 'react-icons/bi';


const ProjectData = ({ project }) => {
    const { name, details, picture, details1, details2, details3, details4, technology, liveLink, gitClient, gitServer } = project
    return (

        <div className="card  border-2 border-white/30 bg-black/20 rounded-none backdrop-blur-2xl  text-white/50 max-h-[450px] w-96" >
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p>{details}</p>

                <div

                    className='flex max-w-max gap-x-6 mx-auto lg:mx-0 lg:text-3xl '>

                    <a className='hover:text-accent tooltip' data-tip='live link' href={liveLink} >
                        <BiWorld></BiWorld>
                    </a>
                    <a className='hover:text-accent tooltip' data-tip='Client Site' href={gitClient}>
                        <FaGithub></FaGithub>
                    </a>
                    <a className='hover:text-accent tooltip' data-tip='Server Site' href={gitServer}>
                        <FaGithub></FaGithub>
                    </a>

                </div>
            </div>
        </div>

    );
};

export default ProjectData;


