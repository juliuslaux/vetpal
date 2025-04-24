import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Examples from '@/components/Examples';
import HowItWorks from '@/components/HowItWorks';
import Faq from '@/components/Faq';
import Cts from '@/components/Cts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Examples />
      <HowItWorks />
      <Faq />
      <Cts />
      <Footer />
    </main>
  );
}
