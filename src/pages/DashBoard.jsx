import { useState } from "react";
import { motion } from "framer-motion";

import { DASHBOARD_TOPICS } from "../constants/data.js";
import Data from "../components/Data.jsx";
import Notification from "../components/Notification.jsx";
import Tasks from "../components/Tasks.jsx";

const DashBoard = () => {
  const [page, setPage] = useState("Dashboard");
  const [tasks, setTasks] = useState([]);

  return (
    <section className="w-full h-full overflow-hidden flex flex-col items-center mt-1">
      <div className="w-fit bg-gray-500 rounded-full flex items-center justify-between">
        {DASHBOARD_TOPICS.map((item, index) => (
          <div
            key={index}
            className={`w-30 flex-1 flex justify-center rounded-full py-1 px-5 transition-all duration-300 cursor-pointer ${
              page === item ? "bg-indigo-500" : ""
            }`}
            onClick={() => setPage(item)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

      <motion.div
        className="flex items-center justify-center mt-5 h-full w-full px-10 gap-5 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="w-full h-[80vh] bg-gray-800 backdrop-blur-md bg-opacity-50 rounded-3xl">
          {page === 'Dashboard' && <Data /> }
          {page === 'Tasks' && (
            <Tasks />)}
        </div>

        <div className="hidden xl:block w-[460px] h-[80vh] bg-gray-800 backdrop-blur-md bg-opacity-50 rounded-3xl">
          <Notification />
        </div>
      </motion.div>

      <div className='mt-4 text-md text-gray-500'>
        Developed by Danai
      </div>
    </section>
  );
};

export default DashBoard;
