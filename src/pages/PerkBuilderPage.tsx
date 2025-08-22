import { Navigation } from "@/components/Navigation";
import { PerkWizard } from "@/components/PerkWizard";
import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";

const PerkBuilderPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTransition>
        <PerkWizard />
        <CTA />
      </PageTransition>
    </div>
  );
};

export default PerkBuilderPage;
