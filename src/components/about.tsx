import {NextPage} from 'next';

const About: NextPage = () => {
    return (
        <div className="grid w-screen bg-neutral bg-cover min-h-screen md:w-[calc(100%-15rem)] text-center content-center">
            <div className="flex flex-col lg:flex-row justify-center content-center">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, officia corporis nobis odio minima quibusdam placeat optio fugit, voluptas illum saepe impedit ipsa, dolorum possimus nihil natus doloribus sequi similique!
                </p>
            </div>
        </div>
    )
}

export default About