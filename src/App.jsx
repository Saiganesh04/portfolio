import HeroTile from './components/HeroTile'
import PhoneMockup from './components/PhoneMockup'
import StatsTile from './components/StatsTile'
import ExperienceTile from './components/ExperienceTile'
import TerminalTile from './components/TerminalTile'
import ProjectsTile from './components/ProjectsTile'
import SkillsTile from './components/SkillsTile'
import CertsTile from './components/CertsTile'
import EducationTile from './components/EducationTile'
import ConnectBar from './components/ConnectBar'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <>
      <Chatbot />
      <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-6 lg:py-10">
        <div className="bento-grid">
          <HeroTile />
          <PhoneMockup />
          <StatsTile />
          <ExperienceTile />
          <TerminalTile />
          <ProjectsTile />
          <SkillsTile />
          <CertsTile />
          <EducationTile />
          <ConnectBar />
        </div>
      </div>
    </>
  )
}
