import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LegacyLeadershipPage from './pages/LegacyLeadershipPage'
import { Sustainability } from './pages/Sustainability'
import Story from './pages/Story/Story'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>
         <Route path="/story" element={<Story/>}/>
      <Route path="/about-us" element={<Story/>}/>

        <Route path="/" element={<HomePage />} />
         <Route path="/legacy-leadership" element={<LegacyLeadershipPage/>} />
        <Route path="/sustainability" element={<Sustainability/>} />

      </Routes>

    </>
  )
}

export default App
