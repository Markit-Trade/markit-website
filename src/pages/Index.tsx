import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProductShowcase from "@/components/ProductShowcase";
import BusinessCase from "@/components/BusinessCase";
import InvestorsWaitlist from "@/components/InvestorsWaitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <ProductShowcase />
      <BusinessCase />
      <InvestorsWaitlist />
      <Footer />
    </div>
  );
};

export default Index;
