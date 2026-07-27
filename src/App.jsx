import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LegacyLeadershipPage from './pages/LegacyLeadershipPage'
import { Sustainability } from './pages/Sustainability'
import Story from './pages/Story/Story'
import { HomePageLayout } from './layouts/HomePageLayout'
import HomePageV1 from './pages/HomeV1'
import ContactUs from './pages/ContactUs'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>
        <Route path="/story" element={<Story />} />
        <Route path="/about-us" element={<Story />} />
        <Route path="/" element={<HomePageLayout />}>
          <Route path="/" element={<HomePageV1 />} />
          <Route path="/legacy-leadership" element={<LegacyLeadershipPage />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />


        </Route>


      </Routes>

    </>
  )
}

export default App
