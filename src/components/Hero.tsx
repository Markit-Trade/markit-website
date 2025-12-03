import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedClassificationsTable from "@/components/demo/AnimatedClassificationTable";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-48 pb-20 px-4 md:px-6 bg-background overflow-visible">
      
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
      <div className="w-full max-w-7xl mt-12 relative z-10">
        <div className="relative rounded-xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/bg-gradient.png" 
                    alt="" 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Content Container with Padding */}
            <div className="relative z-10 px-4 pt-16 pb-0 md:px-12 md:pt-24 md:pb-0 lg:px-16 lg:pt-32 lg:pb-0">
                {/* The Window Component */}
                <div className="w-full max-w-5xl mx-auto bg-background rounded-t-lg shadow-2xl border-x border-t border-border overflow-hidden">
                    {/* Window Chrome */}
                    <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-4">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                        </div>
                        <div className="text-xs font-medium text-muted-foreground/70">
                            markit.enterprise.io
                        </div>
                    </div>
                    <div className="bg-background">
                        <AnimatedClassificationsTable />
                    </div>
                </div>
            </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
