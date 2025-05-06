import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'   
import Test from './pages/Test'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
