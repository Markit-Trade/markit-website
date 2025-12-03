import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedClassificationsTable from "@/components/demo/AnimatedClassificationTable";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-48 px-4 md:px-6 bg-background overflow-hidden">
      
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
          AI-Powered Infrastructure for <br className="hidden md:block" />
          Global Trade Compliance
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto w-full">
          <Input 
            type="email" 
            placeholder="Enter your work email" 
            className="h-12 rounded-full px-6 bg-background border-input"
          />
          <Button 
            size="lg" 
            className="h-12 rounded-full px-8 font-medium bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap w-full sm:w-auto"
          >
            Schedule Demo
          </Button>
        </div>
      </div>

      {/* Demo Placeholder */}
      <div className="w-full max-w-6xl mt-16 relative z-10">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-teal-50 to-orange-50 rounded-t-xl transform scale-[1.02] translate-y-2 -z-10 opacity-80 blur-xl" />
        
        {/* The Component */}
        <div className="w-full bg-white/50 backdrop-blur-sm border border-white/20 rounded-t-xl shadow-2xl overflow-hidden">
            <AnimatedClassificationsTable />
        </div>
      </div>

    </section>
  );
};

export default Hero;
