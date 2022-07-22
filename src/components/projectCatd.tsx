import  ProjectType from '../interfaces/project';
import Link from 'next/link';

type Props = {
    project: ProjectType
}

export default function ProjectCard({ project }: Props) {
    var diffDays: string | number  = 'Unkown';
    if (project.last_updated) {
        const diff = Math.abs(new Date().getTime() - project.last_updated.getTime());
        diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    }

    return ( 
            <div className="flex flex-col rounded-lg shadow-lg bg-neutral-content min-w-64 max-w-64 min-h-64 max-h-80 text-center m-4">
                <div className="p-6 grow">
                    <h5 className="text-primary-content text-xl font-medium mb-2">{project.name}</h5>
                    <p className="text-primary-content text-base mb-4 w-64"> {project.description}</p>
                    <Link href={project.url}>
                        <button className="btn btn-secondary inline-block px-6 py-2 text-secondary-content font-medium text-xs leading-tight rounded-full ">
                            GitHub
                        </button>
                    </Link>
                </div>
                <div className="text-primary-content py-3 px-6 border-t border-neutral-focus">
                    Updated {diffDays} days ago
                </div>
            </div>
    )
}