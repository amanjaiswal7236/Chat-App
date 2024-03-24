import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import { Toaster } from 'react-hot-toast'
import EditProfile from './pages/EditProfile'
import ChatScreen from './pages/ChatScreen'
import CreatePersonlChat from './pages/CreatePersonlChat'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Register/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path="/inbox" element={<ChatScreen />} />
          <Route path="/edit-profile" element={<EditProfile/>} />
          <Route path="/create-personal" element={<CreatePersonlChat />} />
        </Routes>
        <Toaster />

      </BrowserRouter>

    </>

  )
}

export default App
