import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTransition>
        <Features />
        <CTA />
      </PageTransition>
    </div>
  );
};

export default FeaturesPage;
