import NavBar from "../../components/NavBar/NavBar";
import Particle from "../../components/Particles/Particles";
import { Typewriter } from "../../hooks/TypeWriter";
import habibullahResume from "../../../public/Habibullah-resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-min max-w-7xl mx-auto">
      <div className="">
        <Particle></Particle>
      </div>
      <div>
        <NavBar></NavBar>
        <div className="space-y-8 mt-20">
          <div>
            <h2 className="text-accent text-xl ml-1">Hello! I am,</h2>
            <h1 className="text-white text-6xl md:text-8xl font-bold">
              Md. Habibullah
            </h1>
          </div>
          <div>
            <Typewriter></Typewriter>
          </div>
          <div>
            <a
              href={habibullahResume}
              download="habibullah-resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-outline btn-active btn-accent">
                <span className="flex gap-1">
                  <span>get</span>
                  <span>resume</span>
                </span>
              </button>
            </a>
            <button className="ms-4 btn btn-outline btn-accent">
              about me
            </button>
          </div>
          <div className="flex gap-4">
            <Link to='https://github.com/habibullahraju' className="btn btn-accent btn-circle btn-outline"><FaGithub className="text-2xl"></FaGithub></Link>
            <Link to="https://www.linkedin.com/in/md-habibullah-raju/" className="btn btn-accent btn-circle btn-outline">
              <FaLinkedin className="text-2xl"></FaLinkedin>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
