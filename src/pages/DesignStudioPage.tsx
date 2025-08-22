import { Navigation } from "@/components/Navigation";
import { DesignStudio } from "@/components/DesignStudio";
import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";

const DesignStudioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTransition>
        <DesignStudio />
        <CTA />
      </PageTransition>
    </div>
  );
};

export default DesignStudioPage;
