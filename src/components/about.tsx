import {NextPage} from 'next';

const About: NextPage = () => {
    return (
        <div className="grid w-screen bg-neutral bg-cover h-[calc(100vh-4rem)] md:h-screen md:w-[calc(100%-15rem)] text-center content-center p-4">
            <div className="flex flex-col lg:flex-row justify-center content-center">   
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, officia corporis nobis odio minima quibusdam placeat optio fugit, voluptas illum saepe impedit ipsa, dolorum possimus nihil natus doloribus sequi similique!
                </p>
            </div>
        </div>
    )
}

export default About