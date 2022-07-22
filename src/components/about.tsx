import {NextPage} from 'next';

const About: NextPage = () => {
    return (
        <div className="grid p-4 w-screen md:w-[calc(100%-15rem)] h-[calc(100vh-4rem)] md:h-screen bg-gradient-to-b from-neutral to-neutral-focus text-center content-center ">
            <div className="flex flex-col lg:flex-row justify-center content-center">   
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, officia corporis nobis odio minima quibusdam placeat optio fugit, voluptas illum saepe impedit ipsa, dolorum possimus nihil natus doloribus sequi similique!
                </p>
            </div>
        </div>
    )
}

export default About