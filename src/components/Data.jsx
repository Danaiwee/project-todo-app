import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from "react"
import { FaTasks } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";


import { DASHBOARD_CARDS_DATA } from "../constants/data.js"
import Chart from "./Chart.jsx"
import useStore from '../store/useStore.js';
import SummaryCard from './SummaryCard.jsx';
import { Link } from 'react-router-dom';

const Data = () => {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(180);
  const [label, setLabel] = useState(true);

  const {todoLists} = useStore();
  const totalTasks = todoLists.length;
  const pendingTasks = todoLists.filter((list) => list.status === 'Pending').length;
  const completedTasks = todoLists.filter((list) => list.status === 'Completed').length;

  useEffect(() => {
    const updateRadius = () => {
        if(containerRef.current){
            const containerWidth = containerRef.current.offsetWidth;

            if(window.innerWidth < 760){
                setRadius(containerWidth*0.3);
                setLabel(false);

            } else if(window.innerWidth < 1200){
                setRadius(containerWidth*0.2);
                setLabel(true);
            } else {
                setRadius(containerWidth*0.12);
                setLabel(true);
            }
        }
    };

    updateRadius();

    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius)
  }, [])
  
  
  return (
    <motion.div 
    className='w-full h-full p-6 flex flex-col'
    initial={{opacity:0}}
    animate={{opacity: 1}} 
    transition={{duration: 1.5}}
    >
        <h1 className='text-xl sm:text-3xl text-gray-300 font-medium'>Dashboard</h1>
        <p className='text-sm md:text-md text-gray-500'>See you Overall Performance</p>

        <div className='grid grid-cols-3 gap-1 sm:gap-5 mt-4'>
            <SummaryCard 
                bg="bg-blue-400"
                title="Total Tasks"
                total={totalTasks}
                icon={FaTasks}
            />
            <SummaryCard 
                bg="bg-[#ED6A5A]"
                title="Pending Tasks"
                total={pendingTasks}
                icon={MdOutlinePendingActions}
            />
            <SummaryCard 
                bg="bg-[#54D17E]"
                title="Completed Tasks"
                total={completedTasks}
                icon={FaRegCalendarCheck}
            />
        </div>

        <div className='w-full h-full flex flex-col mt-5 '>
            <h1 className='text-xl sm:text-3xl text-gray-300 font-medium'>Performance</h1>    

            <div
                className='bg-gray-700 mt-2 sm:mt-5 rounded-3xl flex justify-center items-center'
                style={{width: '100%', height: '100%'}}
                ref={containerRef}
            >
                {totalTasks > 0 && (
                    <Chart 
                    radius={radius} 
                    label={label} 
                    pendingTasks={pendingTasks}
                    completedTasks={completedTasks} 
                />
                )}

                {totalTasks === 0 && (
                    <div className='w-full h-full flex items-center justify-center'>
                    <p className='text-lg text-gray-500'>
                        No todo List, Please{' '} 
                        <Link to='/create' className='hover:text-indigo-500 transition-all duration-300'>
                        create
                        </Link>
                    </p>
                  </div>
                )}
            </div>
        </div>



    </motion.div>
  )
}

export default Data