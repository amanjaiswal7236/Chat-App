import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import Chats from './pages/Chats'
import EmptyChats from './components/EmptyChats'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Register />} />
        <Route path='/login' element={<LogIn/>} />
        <Route path="/inbox" element={<Chats />} />
        <Route path = "/empty" element={<EmptyChats/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
