import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPages.jsx'
import AboutPage from './pages/AboutPage.jsx'
import { AnimatePresence } from 'framer-motion';
import Footer from './Components/Footer.jsx'
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col theme-transition">
        <Navbar />
        <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* add more routes as needed */}
          </Routes>
        </AnimatePresence>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
