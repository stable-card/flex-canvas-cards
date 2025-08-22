import { Navigation } from "@/components/Navigation";
import { CommunityGallery } from "@/components/CommunityGallery";
import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTransition>
        <CommunityGallery />
        <CTA />
      </PageTransition>
    </div>
  );
};

export default CommunityPage;
