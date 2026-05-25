import HeroSection from './sections/HeroSection'
import IntelligenceSection from './sections/IntelligenceSection'
import HowItWorksSection from './sections/HowItWorksSection'
import CompareSection from './sections/CompareSection'
import PricingSection from './sections/PricingSection'
import FaqSection from './sections/FaqSection'

export default function Landing() {
    return (
        <main>
            <HeroSection />
            <HowItWorksSection />
            <IntelligenceSection />
            <CompareSection />
            <PricingSection />
            <FaqSection />
        </main>
    )
}