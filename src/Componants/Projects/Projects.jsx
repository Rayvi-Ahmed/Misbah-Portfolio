import { useEffect, useState } from "react";
import ProjectData from "../ProjectData/ProjectData";


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div className=" py-8 lg:py-24 lg:h-screen flex items-center text-white" id="project">
            <div className="container mx-auto">
                <div>
                    <h1 className="text-accent font-primary font-bold text-[50px] lg:text-[65px] lg:py-8 py-6 flex flex-col lg:text-center">My Projects</h1>
                </div>
                <div className="grid grid-cols lg:h-screen lg:grid-cols-3 gap-4 my-4 lg:my-8">
                    {
                        projects.map(project => <ProjectData
                            key={project.id}
                            project={project}
                        ></ProjectData>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;