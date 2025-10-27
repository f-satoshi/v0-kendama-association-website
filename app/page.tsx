import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CharmSection } from "@/components/charm-section"
import { HistorySection } from "@/components/history-section"
import { ActivitiesSection } from "@/components/activities-section"
import { TournamentResultsSection } from "@/components/tournament-results-section"
import { PresidentMessageSection } from "@/components/president-message-section"
import { AccessSection } from "@/components/access-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CharmSection />
      <HistorySection />
      <ActivitiesSection />
      <TournamentResultsSection />
      <PresidentMessageSection />
      <AccessSection />
      <Footer />
    </main>
  )
}
