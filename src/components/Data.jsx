import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from "react"

import { DASHBOARD_CARDS_DATA } from "../constants/data.js"
import Chart from "./Chart.jsx"

const Data = () => {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(180);
  const [label, setLabel] = useState(true);

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
                setRadius(containerWidth*0.14);
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
        <h1 className='text-3xl text-gray-300 font-medium'>Dashboard</h1>
        <p className='text-md text-gray-500'>See you Overall Performance</p>

        <div className='grid grid-cols-3 gap-5 mt-4'>
            {DASHBOARD_CARDS_DATA.map((item, index) =>{
                const Icon = item.icon
             return (
                <div
                    key={index}
                    className={`flex items-center justify-between px-5 py-3 ${item.bg} rounded-xl backdrop-blur-md bg-opacity-50`}
                >
                    <div className='flex flex-col gap-2'>
                        <p className='text-white font-medium text-3xl'>
                            {item.total}
                        </p>
                        <p className='text-white text-md xl:text-xl'>
                            {item.title}
                        </p>
                    </div>

                    <Icon 
                        className='hidden xl:block size-10'
                    />
                </div>
            )})}
        </div>

        <div className='w-full h-full flex flex-col mt-5 '>
            <h1 className='text-3xl text-gray-300 font-medium'>Performance</h1>    

            <div
                className='bg-gray-700 mt-5 rounded-3xl flex justify-center items-center'
                style={{width: '100%', height: '100%'}}
                ref={containerRef}
            >
                <Chart radius={radius} label={label} />
            </div>
        </div>



    </motion.div>
  )
}

export default Data