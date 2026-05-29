import Navbar from "@/components/NavbarLoay";
import Hero from "@/components/HeroLoay";
import SocialProof from "@/components/SocialProof";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorksLoay";
import FinalCTA from "@/components/FinalCTA";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { isArabic } = useLanguage();

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black"
    >
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
    </main>
  );
}
