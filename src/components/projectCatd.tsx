import  ProjectType from '../interfaces/project';
import { NextPage } from 'next';

type Props = {
    project: ProjectType
}

export default function ProjectCard({ project }: Props) {
    return ( 
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-primary max-w-sm w-64 max-h-md h-32 text-center">
                <div>
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                    <button>GitHub</button>
                </div>
                <div>A day agp</div>
            </div>
        </div>
    )
}