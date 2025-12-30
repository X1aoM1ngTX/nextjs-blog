import { HeroSection } from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { NewsletterSection } from '@/components/NewsletterSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
