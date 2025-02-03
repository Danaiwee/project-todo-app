import {motion} from 'framer-motion';
import {useEffect} from 'react';

import profileImg from '/avatars/boy1.png';
import NotificationCard from './NotificationCard';
import useNotificationStore from '../store/useNotificationStore.js';


const Notification = () => {
  const {notifications, startNotificationChecker} = useNotificationStore();

  useEffect(() => {
    startNotificationChecker();

  }, [notifications, startNotificationChecker])
  
  return (
    <motion.div
      className='flex flex-col p-6'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
    >
      <div className='w-full flex flex-col items-center gap-3'>
        <img 
          src={profileImg} 
          className='size-20 border-2 border-gray-200 rounded-full'
        />
        <p className='bg-gray-300 px-5 py-1 rounded-full text-gray-900'>
          I'm Danai
        </p>
      </div>

 
      <h1 className='text-gray-300 text-md font-medium mt-5'>Notifications</h1>
      <div className='w-full h-[56vh] overflow-auto scrollbar-hidden mt-1 rounded-lg'>
        <div className='flex flex-col gap-1'>
          {notifications && notifications.map((item) => (
            <NotificationCard 
              key={item.id}
              item={item}
            />
          ))}
          
        </div>
      </div>
    </motion.div>
  )
}

export default Notification