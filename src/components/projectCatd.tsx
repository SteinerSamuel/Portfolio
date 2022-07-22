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
            <div className="block rounded-lg shadow-lg bg-primary-content w-128 h-64 text-center m-4 p-2">
                <div>
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                    <Link href={project.url}>
                        <button className="btn btn-secondary">
                            GitHub
                        </button>
                    </Link>
                </div>
                <div>
                    {diffDays} Days ago
                </div>
            </div>
    )
}