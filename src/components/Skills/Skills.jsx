
import js from '../../../src/assets/javascript_prev_ui.png'
import boostrap from '../../../src/assets/boostrap.png';
import chromedev from '../../../src/assets/chromedev_prev_ui.png';
import csslogo from '../../../src/assets/css_prev_ui.png';
import daisyuiLogo from '../../../src/assets/daisyui_prev_ui.png';
import expressLogo from '../../../src/assets/express_prev_ui.png';
import firebaseLogo from '../../../src/assets/firebase_prev_ui.png';
import gitLogo from '../../../src/assets/git_prev_ui.png';
import htmlLogo from '../../../src/assets/html_prev_ui.png';
import reactRouterLogo from '../../../src/assets/logo-react-router_prev_ui.png';
import mongodbLogo from '../../../src/assets/MongoDB-Emblem_prev_ui.png';
import netlifyLogo from '../../../src/assets/netlify_prev_ui.png';
import nodeLogo from '../../../src/assets/node_prev_ui.png';
import npmLogo from '../../../src/assets/npm_prev_ui.png';
import reactLogo from '../../../src/assets/react.png';
import tailwindLogo from '../../../src/assets/tailwind_prev_ui.png';
import tanstackLogo from '../../../src/assets/tanstack.png';
import vscodeLogo from '../../../src/assets/vscode_prev_ui.png';


import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div className="md:mt-52 my-32 max-w-7xl mx-auto" id='skills'>
      <h2 className="text-5xl text-center text-accent font-semibold">MY <span className="text-white">SKILLS</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14  md:my-24">
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-12' src={reactLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">React</h2>
            </div>
          <ProgressBar
            completed={80}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-16' src={js} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">JavaScript (ES6)</h2>
            </div>
          <ProgressBar
            completed={75}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-16' src={htmlLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">HTML</h2>
            </div>
          <ProgressBar
            completed={90}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-8' src={csslogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">CSS</h2>
            </div>
          <ProgressBar
            completed={85}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-24' src={boostrap} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">Bootstrap</h2>
            </div>
          <ProgressBar
            completed={70}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-12' src={tailwindLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">TailwindCSS</h2>
            </div>
          <ProgressBar
            completed={80}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-20' src={reactRouterLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">React Router</h2>
            </div>
          <ProgressBar
            completed={65}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-12' src={expressLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">Express</h2>
            </div>
          <ProgressBar
            completed={65}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-12' src={mongodbLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">MongoDB</h2>
            </div>
          <ProgressBar
            completed={65}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-12' src={nodeLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">Node</h2>
            </div>
          <ProgressBar
            completed={30}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-16' src={gitLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">Git</h2>
            </div>
          <ProgressBar
            completed={75}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-8' src={tanstackLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">TanStack Query</h2>
            </div>
          <ProgressBar
            completed={40}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-16' src={firebaseLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">Firebase</h2>
            </div>
          <ProgressBar
            completed={60}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-12' src={vscodeLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">VS Code</h2>
            </div>
          <ProgressBar
            completed={80}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-14' src={npmLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">NPM</h2>
            </div>
          <ProgressBar
            completed={60}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-24' src={chromedev} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">Chrome Dev Tools</h2>
            </div>
          <ProgressBar
            completed={60}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-10' src={netlifyLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">Netlify</h2>
            </div>
          <ProgressBar
            completed={75}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
        <div className="bg-slate-900  rounded-xl">
            <div className='flex items-center ps-2 pt-2'>
            <div>
            <img className='w-10' src={daisyuiLogo} alt="" />
            </div>
          <h2 className="text-2xl p-4 text-white font-semibold">DaisyUI</h2>
            </div>
          <ProgressBar
            completed={80}
            bgColor="#1A9389"
            height='15px'
            baseBgColor="bg-[#494949]"
            transitionTimingFunction="ease"
            animateOnRender
            maxCompleted={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
