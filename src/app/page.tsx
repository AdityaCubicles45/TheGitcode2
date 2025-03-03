
import Navbar from '@/components/ui/Navbar';
import About from './dashboard/components/About';
import CommunitySection from './dashboard/components/Community';
import Hero from './dashboard/components/Hero';
import HowItWorks from './dashboard/components/HowItWork';
import StartToday from './dashboard/components/StartToday';
import WhyGitcode from './dashboard/components/WhyGitcode';
import Footer from '@/components/ui/Footer';

export default async function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#000]">
        <Navbar />
        <Hero />
        <HowItWorks />
        <About />
        <WhyGitcode />
        <CommunitySection />
        <StartToday />
        <Footer />
      </main>
  );
}
