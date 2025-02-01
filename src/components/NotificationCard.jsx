import { IoClose } from "react-icons/io5";

const NotificationCard = () => {
  return (
    <div className='w-full flex flex-col bg-gray-500 rounded-lg px-3 py-2 relative mt-2'>
        <IoClose className='absolute right-2 cursor-pointer hover:bg-red-500' />
        <p className='font-bold text-md text-gray-900'>Go to see doctor.</p>
        <p className='text-sm text-gray-200'>
            2025-02-01, 
            <span>14:58</span>
        </p>
    </div>
  )
}

export default NotificationCard