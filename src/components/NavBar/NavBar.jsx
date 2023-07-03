import { HashLink as Link } from 'react-router-hash-link';
import logoAccent from '../../../public/logoAccent.png'
import habibullahResume from '../../../public/Habibullah-resume.pdf';

const NavBar = () => {
  return (
    
      <div className="navbar  bg-base-900 text-white pt-10">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box text-black w-52"
          >
            <li><a>Home</a></li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn hidden md:flex btn-ghost normal-case text-xl"><img className="w-20" src={logoAccent} alt="logo"  /></a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex space-x-6 text-gray-300     px-1">
          <li className="text-base ">
            <Link to="#about" smooth className="">ABOUT</Link>
          </li>
          <li className="text-base">
          <Link to="#skills" smooth className="">SKILLS</Link>
          </li>
          <li className="text-base">
          <Link to="#projects" smooth className="">PROJECTS</Link>
          </li>
          <li className="text-base">
          <Link to="#contact" smooth className="">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="ml-4 ">
      <a
        href={habibullahResume}
        download="habibullah-resume"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn btn-outline btn-accent">resume</button>
      </a>
      </div>
     
    </div>
    
  );
};

export default NavBar;
