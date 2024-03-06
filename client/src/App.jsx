import {  Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import Chats from './pages/Chats'
import EmptyChats from './components/EmptyChats'
import { useAuthContext } from './context/AuthContext'

import { Toaster } from 'react-hot-toast'

function App() {
  const { authUser } = useAuthContext();
  return (
    <>

      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Register />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <LogIn />} />
        <Route path="/inbox" element={<Chats />} />
        <Route path="/empty" element={<EmptyChats />} />
      </Routes>
      <Toaster />

    </>

  )
}

export default App
