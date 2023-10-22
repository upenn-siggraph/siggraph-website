import AboutSection from './about-section'
import ContactSection from './contact-section'
import EventBanner from './event-banner'
import Header from './header'
import Splash from './splash-section'
import TeamSection from './team-section'

export const metadata = {
  title: 'UPenn SIGGRAPH',
  description:
    'The official UPenn chapter of the SIGGRAPH organization, focused on researching, developing, and exploring interactive 3D technology.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <EventBanner />
        <Splash />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
    </>
  )
}
