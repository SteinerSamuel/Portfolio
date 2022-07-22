
import ProjectCard from "./projectCatd";
import ProjectType from "../interfaces/project";
import { Endpoints } from "@octokit/types";
import { request } from "@octokit/request"
import useSWR from "swr";

type listUserReposResponse = Endpoints["GET /users/{username}/repos"]["response"];


export default function Projects() {

    const { data } = useSWR<listUserReposResponse | null>(
        ["GET /users/{username}/repos", {username: "SteinerSamuel"}],
        request
    );


    if (!data) {
        return (
            <div>Loading ... </div>
        )
    }
    
    return (
        <div className="flex flex-wrap p-4 w-screen md:w-[calc(100%-15rem)] h-[calc(100vh-4rem)] md:h-screen bg-gradient-to-b from-neutral-focus to-base justify-evenly overflow-y-scroll">
            {data['data'].map((project) => (
                <ProjectCard key={project.id}
                    project={{
                        id: project.id,
                        name: project.full_name,
                        description: project.description,
                        url: project.html_url,
                        last_updated: (!project.updated_at) ? null : new Date(project.updated_at),
                    }} />
            ))} 
        </div>
    )
}