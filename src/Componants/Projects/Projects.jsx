import { useEffect, useState } from "react";
import ProjectData from "../ProjectData/ProjectData";
import { fadeIn } from '../../Varient/Variants'
import { motion } from 'framer-motion'


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <motion.div
            variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}

            className=" py-16  lg:py-8 lg:h-screen flex items-center text-white" id="project">
            <div className="container mx-auto">
                <div>
                    <h1 className='font-bold text-3xl text-accent  border-b-2 border-gray-500 p-2 inline shadow-purple-400'>My Projects</h1>
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
        </motion.div>
    );
};

export default Projects;