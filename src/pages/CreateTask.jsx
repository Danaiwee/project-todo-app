import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import useStore from "../store/useStore.js";

const CreateTask = () => {
  const [createFormData, setCreateFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    category: 'personal',
    alert: 'enable'
  });

  const {todoLists, createList} = useStore();

  useEffect(() => {
    console.log('create: ',todoLists);
    
  }, [todoLists])
  
  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setCreateFormData((prev) => ({...prev, [name]: value}));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await createList(createFormData);

    setCreateFormData({
      title: '',
    date: '',
    time: '',
    description: '',
    category: 'personal',
    alert: 'enable'
    })
  };
  return (
    <motion.section 
        className="relative w-full h-[90vh] flex flex-col items-center justify-center"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5}}
    >
      <div className="w-full max-w-lg mx-10 sm:mx-auto bg-gray-700 rounded-xl p-3 flex flex-col">
        <h1 className="text-2xl text-gray-200 font-medium">Create new task</h1>

        <form onSubmit={handleFormSubmit} className="mt-3">
          <div className="flex flex-col w-full gap-0.5">
            <label htmlFor="title" className="text-md">
              Task title
            </label>
            <input
              className="w-full text-md bg-gray-500 rounded-lg h-8 px-3 border-none outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Add your task..."
              name="title"
              id="title"
              value={createFormData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex items-center gap-3 mt-3">
            <div className="flex-1 flex flex-col">
              <label htmlFor="date" className="text-md">
                Date
              </label>
              <input
                className="w-full text-md bg-gray-500 rounded-lg h-8 px-3 border-none outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Add your task..."
                type="date"
                id="date"
                name="date"
                value={createFormData.date}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="time" className="text-md">
                Time
              </label>
              <input
                className="w-full text-md bg-gray-500 rounded-lg h-8 px-3 border-none outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Add your task..."
                type="time"
                id="time"
                name="time"
                value={createFormData.time}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full mt-3">
            <label htmlFor="description" className="text-md">
              Description
            </label>
            <textarea
              className="w-full h-20 text-md bg-gray-500 rounded-lg p-2 border-none outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Add your description..."
              name="description"
              id="description"
              value={createFormData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex mt-2 gap-3">
            <div className="flex-1 flex flex-col">
              <label htmlFor="category" className="text-md">
                Category
              </label>
              <select
                name="category"
                id="category"
                className=" bg-gray-500 rounded-lg p-1 border-none outline-none focus:ring-2 focus:ring-indigo-500" 
                value={createFormData.category}
                onChange={handleInputChange}
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="event">Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="alert" className="text-md">
                Alert
              </label>
              <select
                name="alert"
                id="alert"
                className=" bg-gray-500 rounded-lg p-1 border-none outline-none focus:ring-2 focus:ring-indigo-500"
                value={createFormData.alert}
                onChange={handleInputChange}
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <Link to="/dashboard" className="flex-1 w-full">
              <button className="w-full bg-gray-400 hover:bg-gray-300 rounded-xl p-3 cursor-pointer">
                Back
              </button>
            </Link>
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-400 rounded-xl p-3 cursor-pointer">
              Create
            </button>
          </div>
        </form>
      </div>

      <div className='absolute bottom-0 text-md text-gray-500'>
        Developed by Danai
      </div>
    </motion.section>
  );
};

export default CreateTask;
