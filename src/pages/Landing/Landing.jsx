import HeroSection from './sections/HeroSection'
import IntelligenceSection from './sections/IntelligenceSection'
import HowItWorksSection from './sections/HowItWorksSection'

export default function Landing() {
    return (
        <main>
            <HeroSection />
            <HowItWorksSection />
            <IntelligenceSection />
        </main>
    )
}