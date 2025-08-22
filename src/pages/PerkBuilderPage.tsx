import { Navigation } from "@/components/Navigation";
import { PerkBuilder } from "@/components/PerkBuilder";
import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";

const PerkBuilderPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTransition>
        <PerkBuilder />
        <CTA />
      </PageTransition>
    </div>
  );
};

export default PerkBuilderPage;
