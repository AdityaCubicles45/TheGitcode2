
import Navbar from '@/app/components/Navbar';
import Footer from '@/components/ui/Footer';
import About from './components/About';
import CommunitySection from './components/Community';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWork';
import StartToday from './components/StartToday';
import WhyGitcode from './components/WhyGitcode';


export default async function Home() {

  return (
      <main className="bg-[#000]">
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
