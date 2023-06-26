import React from 'react';

const ProjectData = ({ project }) => {
    const { name, details, picture, details1, details2, details3, details4, technology, liveLink, gitClient, gitServer } = project
    return (
        <div className="card card-side bg-black/20 rounded-none backdrop-blur-2xl  text-white/50 max-h-[450px]">
            <figure><img className='max-w-[200px]' src={picture} alt="Movie" /></figure>
            <div className="card-body p-3">
                <h2 className="card-title text-accent font-primary lg:text-2xl font-bold">{name}</h2>
                <p>Description: {details}</p>
                <div className='flex flex-1 items-center justify-center gap-3'>
                    <a href={liveLink}><button className='btn btn-sm'>Live Link</button></a>
                    <a href={gitClient}><button className='btn btn-sm'>Client Side</button></a>
                    <a href={gitServer}><button className='btn btn-sm'>Server Side</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectData;



{/* <div className='flex flex-1 items-center jus'>
<a href={liveLink}><button className='btn btn-sm'>Live Link</button></a>
<a href={gitClient}><button className='btn btn-sm'>Client Side</button></a>
<a href={gitServer}><button className='btn btn-sm'>Server Side</button></a>
</div> */}