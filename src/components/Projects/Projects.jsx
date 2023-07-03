
import { FaGithub, FaRegArrowAltCircleRight } from 'react-icons/fa';
import project1 from '../../../src/assets/Lingua-Learn0.png'
import project2 from '../../../src/assets/Lingua-Learn1.png'
import project3 from '../../../src/assets/Lingua-Learn2.png'
import project4 from '../../../src/assets/Lingua-Learn3.png'
import glaze1 from '../../../src/assets/glaze1.png';
import glaze2 from '../../../src/assets/glaze2.png';
import glaze3 from '../../../src/assets/glaze3.png';
import glaze4 from '../../../src/assets/glaze4.png';
import flavor1 from '../../../src/assets/flavor1.png';
import flavor2 from '../../../src/assets/flavor2.png';
import flavor3 from '../../../src/assets/flavor3.png';
import flavor4 from '../../../src/assets/flavor4.png';
import { Link } from 'react-router-dom';



const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto" id='projects'>
      <h2 className="text-white text-5xl text-center font-semibold">
        MY <span className="text-accent">PROJECTS</span>
      </h2>
      <div className="mb-40 mt-14 lg:mt-28">
        <div className="lg:flex gap-5 px-6  mb-14 rounded-md bg-[#0F172A]">
          <div className="w-fit mb-10 lg:w-2/4 md:mb-2">
            <h2 className="text-3xl font-semibold mb-3 text-white">
              Language Learning Website
            </h2>
            <p className="text-xl mb-3">
            This is a language learning website where students can select classes. Once a student pays for a class, they can access their enrolled classes page for that specific class.An instructor can add a class, and once the admin approves it, the class will be displayed on the website's 'All Classes' page.The admin has the ability to manage all classes and can also change user roles.
            </p>
            <div className="space-x-4">
            <Link to="https://github.com/habibullahraju/lingua-learn-server" className="btn btn-accent text-[#0F172A] btn-sm"><FaGithub></FaGithub> Server</Link>
            <Link to="https://github.com/habibullahraju/lingua-learn-client" className="btn btn-accent text-[#0F172A] btn-sm"><FaGithub></FaGithub> Client</Link>
            <Link to="https://lingualearn-28c06.web.app/" className="btn btn-accent text-[#0F172A] btn-sm"><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> Live Site</Link>
            </div>
          </div>
          <div className="w-fit">
            <div className="carousel w-full">
              <div id="1" className="carousel-item w-full">
                <img src={project1} className="w-full " />
              </div>
              <div id="2" className="carousel-item w-full">
                <img
                  src={project2}
                />
              </div>
              <div id="3" className="carousel-item w-full">
                <img
                  src={project3}
                />
              </div>
              <div id="4" className="carousel-item w-full">
                <img
                  src={project4}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#1" className="btn btn-xs">
                1
              </a>
              <a href="#2" className="btn btn-xs">
                2
              </a>
              <a href="#3" className="btn btn-xs">
                3
              </a>
              <a href="#4" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-5 px-6 pt-10 rounded-md bg-[#0F172A]">
        
          <div className="w-fit  mb-10 md:mb-2">
            <div className="carousel w-full">
              <div id="9" className="carousel-item w-full">
                <img src={glaze1} className="w-full " />
              </div>
              <div id="10" className="carousel-item w-full">
              <img src={glaze2} className="w-full " />
              </div>
              <div id="11" className="carousel-item w-full">
              <img src={glaze3} className="w-full " />
              </div>
              <div id="12" className="carousel-item w-full">
              <img src={glaze4} className="w-full " />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#9" className="btn btn-xs">
                1
              </a>
              <a href="#10" className="btn btn-xs">
                2
              </a>
              <a href="#11" className="btn btn-xs">
                3
              </a>
              <a href="#12" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
          <div className="lg:w-2/4 mb-10 md:mb-2">
            <h2 className="text-3xl font-semibold mb-3 text-white">
              Toy Marketplace Website
            </h2>
            <p className="text-xl mb-3">
            This is a single-page application for a toy marketplace. You can add, delete, and update toys on the website. Additionally, you can shop by category, and each toy in the cart has a 'View Details' button. Clicking on the 'View Details' button allows you to see the specific details of the toy.
            </p>
            <div className="space-x-4">
            <Link to="https://github.com/habibullahraju/toy-car-server" className="btn btn-accent text-[#0F172A] btn-sm"><FaGithub></FaGithub> Server</Link>
            <Link to="https://github.com/habibullahraju/toy-car-marketplace-client" className="btn btn-accent text-[#0F172A] btn-sm"><FaGithub></FaGithub> Client</Link>
            <Link to="https://glaze-car.web.app/" className="btn btn-accent text-[#0F172A] btn-sm"><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> Live Site</Link>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-5 px-6 pt-10 mt-14 rounded-md bg-[#0F172A]">
          <div className="w-fit lg:w-2/4 mb-10 md:mb-2">
            <h2 className="text-3xl font-semibold mb-3 text-white">
              Chef Recite Website
            </h2>
            <p className="text-xl mb-3">
            This is a single-page web application for a chef recipe platform. I have implemented a Firebase authentication system. The website features a section dedicated to our professional chefs, where you can view their details and explore three of their recipes.
            </p>
            <div className="space-x-4">
            <Link to="https://github.com/habibullahraju/chef-recipe-flavor-frezy-server" className="btn btn-accent text-[#0F172A] btn-sm"><FaGithub></FaGithub> Server</Link>
            <Link to="https://github.com/habibullahraju/chef-recipe-flavor-frezy" className="btn btn-accent text-[#0F172A] btn-sm"><FaGithub></FaGithub> Client</Link>
            <Link to="https://flavor-frenzy-a9842.web.app/" className="btn btn-accent text-[#0F172A] btn-sm"><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> Live Site</Link>
            </div>
          </div>
          <div className="w-fit">
            <div className="carousel w-full">
              <div id="5" className="carousel-item w-full">
                <img src={flavor1} className="w-full " />
              </div>
              <div id="6" className="carousel-item w-full">
                <img
                  src={flavor2}
                />
              </div>
              <div id="7" className="carousel-item w-full">
                <img
                  src={flavor3}
                />
              </div>
              <div id="8" className="carousel-item w-full">
                <img
                  src={flavor4}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#5" className="btn btn-xs">
                1
              </a>
              <a href="#6" className="btn btn-xs">
                2
              </a>
              <a href="#7" className="btn btn-xs">
                3
              </a>
              <a href="#8" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
