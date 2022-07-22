import type { NextPage } from "next";
import ProjectCard from "./projectCatd";
import ProjectType from "../interfaces/project";

const Projects: NextPage = () => {
    const projects: ProjectType[] = [
        {id: 0, name: 'Test1', description: 'Test Description', url: 'TESTURL'},
        {id: 1, name: 'Test2', description: 'Test Description', url: 'TESTURL'},
        {id: 2, name: 'Test3', description: 'Test Description', url: 'TESTURL'},
        {id: 3, name: 'Test4', description: 'Test Description', url: 'TESTURL'}
    ];
    return (
        <div className="flex flex-row p-4 w-screen md:w-[calc(100%-15rem)] h-[calc(100vh-4rem)] md:h-screen bg-gradient-to-b from-neutral-focus to-base">
            {projects.map((project) => (
                <ProjectCard key={project.id}
                    project={project} />
            ))} 
        </div>
    )
}


export default Projects;