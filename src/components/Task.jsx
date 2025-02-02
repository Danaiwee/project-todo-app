import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const Task = ({content, date, time, category, status}) => {
  return (
<div className={ `px-5 py-2 rounded-xl flex items-center ${status === 'Pending' ? 'bg-red-200' : 'bg-green-200'}`}>
      <div className="flex-3 lg:flex-1 flex items-center">
        <input
          type="checkbox"
          id="activity"
          className="w-4 h-4 sm:w-5 sm:h-5 border-none outline-none rounded-md focus:outline-none"
        />
        <label
          htmlFor="activity"
          className="ml-2 text-sm sm:text-lg text-gray-900 font-medium"
        >
          {content}
          <p className="relative -top-1 text-[10px] sm:text-sm text-gray-700">
            {date}
            <span> {time}</span>
          </p>
        </label>
      </div>

      <div className="hidden flex-1 sm:flex items-center justify-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-700 text-sm">Category</p>
          <button className="bg-indigo-500 px-4 py-1 rounded-full">
            {category}
          </button>
        </div>
        <div className="hidden lg:flex flex-col items-center gap-1">
          <p className="text-gray-700 text-sm">Status</p>
          <button className="bg-red-400 px-4 py-1 rounded-full">{status}</button>
        </div>
      </div>

      <div className='flex-1 flex items-center justify-end'>
        <HiOutlinePencilSquare 
            className='size-4 sm:size-5 text-indigo-500 cursor-pointer'
        />
        <RiDeleteBinLine 
            className='size-4 sm:size-5 text-red-500 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Task;
