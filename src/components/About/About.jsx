import habibullahResume from "../../../public/Habibullah-resume.pdf";
import habibullahimage from "../../../public/habibullah-image.png";
const About = () => {
  return (
    <div className=" max-w-7xl md:my-40 pt-20 my-32 mx-auto" id="about">
      <h2 className="text-5xl text-center font-semibold uppercase text-white">
        About <span className="text-accent">Me</span>
      </h2>
      <div className="mt-14 md:mt-20 md:flex items-center gap-32">
        <div className="md:w-1/2">
          <p className="text-lg text-gray-200">I am Md. Habibullah;
          Passionate and motivated MERN stack junior developer with a strong desire to learn and grow in a dynamic and collaborative environment. Committed to delivering high-quality code and exceptional user experiences, I aim to utilize my skills in React, Express, MongoDB, and Node.js to drive impactful results and contribute to the success of the team.
          </p>
          <a
            href={habibullahResume}
            download="habibullah-resume"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn my-10 btn-outline btn-active btn-accent">
              <span className="flex gap-1">
                <span>get</span>
                <span>resume</span>
              </span>
            </button>
          </a>
        </div>

        <div className="md:w-1/2 w-full h-96   ">
        <img
          className="object-contain rounded-lg w-full" src={habibullahimage}
          alt=""
        />
        </div>
      </div>
    </div>
  );
};

export default About;
