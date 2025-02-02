import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { TASK_FILTER_LISTS } from "../constants/data.js";
import { TASK_DATA } from "../constants/data.js";
import Task from "./Task";
import { Link } from "react-router-dom";

const Tasks = ({ setOpenCreateTask, openCreateTask }) => {
  const [filtered, setFiltered] = useState("All");
  const [status, setStatus] = useState("Pending");
  return (
    <motion.div
      className="w-full h-full p-6 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 flex flex-col">
          <h1 className="text-xl sm:text-3xl text-gray-300 font-medium">
            Tasks
          </h1>
          <p className="text-sm sm:text-md text-gray-500">February 1, 2025</p>
        </div>

        <div className="hidden flex-1 w-fit bg-gray-500 rounded-full lg:flex items-center justify-between">
          {TASK_FILTER_LISTS.map((item, index) => (
            <div
              key={index}
              className={`w-30 flex-1 flex justify-center rounded-full py-1 px-5 transition-all duration-300 cursor-pointer ${
                filtered === item ? "bg-indigo-500" : ""
              }`}
              onClick={() => setFiltered(item)}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 relative flex justify-end w-full">
          <input
            className="w-full md:w-[50%] h-8 bg-gray-700 ouline-none border-none rounded-full focus:outline-none pl-5 overflow-hidden text-sm sm:text-md"
            type="text"
            placeholder="Search here..."
          />
          <FaSearch className="hidden sm:block size-5 absolute text-gray-400 top-1 right-3" />
        </div>
      </div>

      <div className="lg:hidden w-full bg-gray-500 rounded-full flex items-center justify-between mt-5">
        {TASK_FILTER_LISTS.map((item, index) => (
          <div
            key={index}
            className={`w-20 text-sm flex-1 flex justify-center rounded-full py-1 px-5 transition-all duration-300 cursor-pointer ${
              filtered === item ? "bg-indigo-500" : ""
            }`}
            onClick={() => setFiltered(item)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-full overflow-y-auto scrollbar-hidden flex flex-col mt-5 gap-1.5">
        {TASK_DATA.map((item) => (
          <Task
            key={item.id}
            content={item.content}
            date={item.date}
            time={item.time}
            category={item.category}
            status={item.status}
          />
        ))}
      </div>

      <Link
        to='/create'
        className="w-fit p-5 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-all duration-300 bg-opacity-50 backdrop-blur-md cursor-pointer absolute bottom-5 right-5"
      >
        <FaPlus />
      </Link>
    </motion.div>
  );
};

export default Tasks;
