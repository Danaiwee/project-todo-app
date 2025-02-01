import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import DashBoard from "./pages/DashBoard"

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900 text-white'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/dashboard' element={<DashBoard />} />
       </Routes>
      <Toaster />
    </div>
  )
}

export default App