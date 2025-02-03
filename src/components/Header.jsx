import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';

import {HEADER_LISTS} from '../constants/data.js';
import profileImg from '/avatars/boy1.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);  

  return (
    <header className='w-full px-10'>
        <div className='flex items-center justify-between py-4'>
            <Link to='/' className='flex items-center gap-0'>
                <p className='text-3xl md:text-4xl text-white'>
                    toDo
                </p>
                <p className='text-3xl md:text-4xl text-indigo-500'>
                    Lists
                </p>
            </Link>

            <div className='hidden sm:flex items-center gap-7 '>
                {HEADER_LISTS.map((item) => (
                    <Link 
                        key={item.id}
                        to={item.link}
                        className='text-gray-300 hover:text-indigo-500 text-lg transition-all duration-300 font-medium'
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className='flex items-center gap-3 relative'>
                <div className='flex items-center bg-gray-700 rounded-full gap-3 sm:pr-4'>
                    <img 
                    src={profileImg}
                    className='size-8 rounded-full'
                />
                <p className='hidden sm:flex text-white font-medium text-md'>
                    Hi, Danai
                </p>
                </div>

                <MdMenu  
                    className='size-7 text-gray-200 cursor-pointer sm:hidden'
                    onClick={() => setShowMenu(!showMenu)}
                />

                {showMenu && (
                    <div className='absolute flex flex-col items-end top-15 right-2 bg-gray-500 p-5 rounded-lg transition-all duration-300 z-50'>
                    {HEADER_LISTS.map((item) => (
                        <Link 
                            key={item.id}
                            to={item.link}
                            className='text-gray-300 hover:text-indigo-500 text-lg transition-all duration-300 font-medium'
                            onClick={() => setShowMenu(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                    </div>
                )}
                
            </div>
        </div>
    </header>
  )
}

export default Header