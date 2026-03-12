import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BabySignLanguage from './components/Babysignlanguage'
import Banner from './components/Banner'
import BenefitsOfSignLanguage from './components/Benefitsofsignlanguage'
import GamesSection from './components/GamesSection'
import ParentDashboard from './components/Parentdashboard'
import QuizSection from './components/QuizSection'
import Signlanguage from './components/Signlanguage'
import Stages from './components/Stages'
import PrivacyPolicy from './components/PrivacyPolicy'

// Main landing page
const Home = () => (
  <div className="body">
    <Banner />
    <Signlanguage />
    <BabySignLanguage />
    <BenefitsOfSignLanguage />
    <Stages />
    <QuizSection />
    <ParentDashboard />
    <GamesSection />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App