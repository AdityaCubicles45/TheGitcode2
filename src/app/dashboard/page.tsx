import About from './components/About';
import CommunitySection from './components/Community';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWork';
import ReachUs from './components/ReachUs';
import StartToday from './components/StartToday';
import WhyGitcode from './components/WhyGitcode';

export default async function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#000]">
        <Hero />
        <HowItWorks />
        <About />
        <WhyGitcode />
        <CommunitySection />
        <StartToday />
        <ReachUs />
      </main>
  );
}
