import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[100vh] flex items-center justify-center px-12 md:px-20 pt-[72px] relative overflow-hidden bg-background">
      {/* Minimal background - subtle grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)",
          backgroundSize: "100px 100px"
        }} />
      </div>

      <div className="max-w-[1200px] w-full mx-auto relative z-10 px-0">
        <div className="space-y-6 max-w-4xl animate-fade-up">
          <div className="space-y-4">
            {/* Compelling headline */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] text-foreground tracking-tight pl-6">
                Trade Compliance <span className="text-primary">Reimagined</span>
              </h1>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl font-light">
              Enterprise-grade AI that automatically classifies global shipments with 98%+ accuracy. Eliminate manual work, reduce compliance risk, and achieve audit-ready governance at scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => scrollToSection("waitlist")}
              className="text-xs font-semibold px-6 uppercase tracking-wide hover:shadow-lg transition-shadow duration-300"
            >
              Join Waitlist
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              onClick={() => scrollToSection("investors")}
              className="text-xs font-semibold px-6 uppercase tracking-wide hover:shadow-lg transition-shadow duration-300"
            >
              Investor Materials
            </Button>
          </div>

          {/* Stats or trust indicators */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">98%+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Classification Accuracy</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">30 Days</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">To Positive Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
