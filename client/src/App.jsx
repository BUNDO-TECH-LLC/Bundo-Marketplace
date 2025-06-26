import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </>
  )
}

export default App
