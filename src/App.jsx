import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"

import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import DashBoard from "./pages/DashBoard"
import Contact from "./pages/Contact"
import CreateTask from './pages/CreateTask'
import UpdateTask from "./pages/๊UpdateTask"

const App = () => {
  const [page, setPage] = useState('Dashboard');
  return (
    <div className='w-full min-h-screen bg-gray-900 text-white'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/dashboard' element={<DashBoard page={page} setPage={setPage} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/create' element={<CreateTask setPage={setPage} />} />
        <Route path='/update/:id' element={<UpdateTask setPage={setPage} />} />
       </Routes>
      <Toaster />
    </div>
  )
}

export default App;