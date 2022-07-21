import type { NextPage } from "next";

const Landing: NextPage = () => {
  return (
    <div
      className="hero h-[calc(100vh-4rem)] md:h-screen md:w-[calc(100%-16rem)] bg-neutral/[.9]"
      style={{
        backgroundImage: `url("/images/jumboBG.webp")`,
        backgroundBlendMode: `darken`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="text-5xl font-bold">Learn Explore Create</h1>
          <p className="py-6">
            I am a software engineer, and machine learning researcher, who
            focuses on NLP and Social Computing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
