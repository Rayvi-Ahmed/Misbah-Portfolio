import React from 'react';

const ProjectData = ({ project }) => {
    const { name, details, picture, details1, details2, details3, details4, technology, liveLink, gitClient, gitServer } = project
    return (
        <div className="card card-compact border-lg w-96 h-[380px] lg:h-[450px] bg-purple-800 bg-transparent rounded-none">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectData;