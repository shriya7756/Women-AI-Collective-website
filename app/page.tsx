import WhoWeAreSection from '@/components/WhoWeAreSection';
import ImpactSection from '@/components/ImpactSection';
import PillarsSection from '@/components/PillarsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <WhoWeAreSection />
      <ImpactSection />
      <PillarsSection />
    </main>
  );
}
