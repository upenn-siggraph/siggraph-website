import AboutSection from './about-section'
import ContactSection from './contact-section'
import Splash from './splash-section'
import TeamSection from './team-section'

export const metadata = {
  title: 'UPenn SIGGRAPH',
  description:
    'The official UPenn chapter of the SIGGRAPH organization, focused on researching, developing, and exploring interactive 3D technology.',
}

export default function Home() {
  return (
    <main className="container mx-auto">
      <Splash />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}
