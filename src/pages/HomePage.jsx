import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

import todoImg from '../assets/images/todo.png';
import homeImg from '../assets/images/homeimg.svg';

const HomePage = () => {
  return (
    <motion.section 
      className="relative w-full max-w-[1520px] h-[85vh] px-10 mt-[50px] lg:mt-0 flex flex-col justify-center items-center mx-auto"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}  
    >
      <motion.div 
        className="h-fit lg:h-full flex flex-col lg:flex-row lg:items-center lg:justify-center"
        initial={{opacity: 0, y:20}}
        animate={{opacity: 1, y:0}}
        transition={{delay: 0.5}}
      >
        <div className="flex-1 flex flex-col">
          <div className='lg:pl-[100px]'>
          <div className="flex items-center gap-1">
            <h1 className="text-4xl sm:text-5xl xl:text-7xl space-y-5 text-white font-bold">
              Easily Manage Your&nbsp;
              <span className="text-indigo-500">Daily Tasks</span>
            </h1>
          </div>
          <p className="text-lg text-gray-500 mt-5 mb-5">
            You are never too old to set another goal or to dream a new dream.
          </p>

          <Link to="/dashboard" className='mt-5'>
            <button className="bg-indigo-500 hover:bg-indigo-400 px-4 py-2 cursor-pointer rounded-full font-medium text-lg">
              Get Started
            </button>
          </Link>
          </div>
        </div>

        <motion.div 
          className="hidden lg:flex flex-1"
          initial={{opacity: 0, y:20}}
          animate={{opacity: 1, y:0}}
          transition={{delay: 1.0}}
        >
          <img 
            src={todoImg}
            className='w-[100%] md:w-[80%]'
          />
        </motion.div>

        <div className="flex lg:hidden flex-1">
          <img 
            src={homeImg}
            className='w-[100%] md:w-[80%]'
          />
        </div>
      </motion.div>

      <div className='absolute bottom-0 flex justify-center bg-gray-800 px-5 py-3 text-sm lg:text-md rounded-full text-gray-300 '>
        Developed by Danai
      </div>
    </motion.section>
  );
};

export default HomePage;
