import './App.css'
import BabySignLanguage from './components/Babysignlanguage'
import Banner from './components/Banner'
import BenefitsOfSignLanguage from './components/Benefitsofsignlanguage'
import GamesSection from './components/GamesSection'
import ParentDashboard from './components/Parentdashboard'
import QuizSection from './components/QuizSection'
import Signlanguage from './components/Signlanguage'
import Stages from './components/Stages'

function App() {

  return (
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
}

export default App
