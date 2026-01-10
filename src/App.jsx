import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import config from './configFile/config'
import Home from './components/home'
import About from './components/about'
import Demo from './components/demo'
import Services from './components/services'
import Projects from './components/projects'
import Blog from './components/blog'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`${config.baseurl}`} element={<Home />} />
          <Route path={`${config.baseurl}about`} element={<About />} />
          <Route path={`${config.baseurl}services`} element={<Services />} />
          <Route path={`${config.baseurl}projects`} element={<Projects />} />
          <Route path={`${config.baseurl}blog`} element={<Blog />} />
          <Route path={`${config.baseurl}contact`} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
