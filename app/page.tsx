import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { GradePrograms } from '@/components/grade-programs'
import { SubjectsSection } from '@/components/subjects-section'
import { LearningProcess } from '@/components/learning-process'
import { RegionsSection } from '@/components/regions-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <GradePrograms />
        <SubjectsSection />
        <LearningProcess />
        <RegionsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
