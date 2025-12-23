import HowDifferentSection from '@/components/HowDifferentSection';
import WhoIsThisForSection from '@/components/WhoIsThisForSection';
import ProgramHighlightsSection from '@/components/ProgramHighlightsSection';

export default function ProgramsPage() {
    return (
        <main className="min-h-screen">
            <HowDifferentSection />
            <WhoIsThisForSection />
            <ProgramHighlightsSection />
        </main>
    );
}
