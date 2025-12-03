import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Founders = () => {
  const team = [
    {
      name: "Sarah Chen",
      title: "Co-Founder & CEO",
      bio: "Former Technical Lead at Palantir. 10+ years building data infrastructure for government and enterprise compliance operations.",
      specialty: "Data Infrastructure",
    },
    {
      name: "Michael Rodriguez",
      title: "Co-Founder & CTO",
      bio: "Ex-Scale AI Engineering Director. Led AI classification systems for Fortune 500 logistics operations. Published researcher in supply chain optimization.",
      specialty: "AI & Classification",
    },
    {
      name: "Emily Watson",
      title: "VP of Product",
      bio: "Previously at Stripe scaling compliance tools for global payments. Deep expertise in customs regulations and institutional requirements.",
      specialty: "Product Strategy",
    },
    {
      name: "David Park",
      title: "Head of Engineering",
      bio: "Ex-Google infrastructure engineer. Specialized in building scalable systems handling billions of transactions and regulatory compliance.",
      specialty: "Infrastructure",
    },
    {
      name: "Jessica Liu",
      title: "VP of Sales",
      bio: "Built enterprise relationships at leading logistics platforms. 12+ years in customs and trade tech.",
      specialty: "Enterprise GTM",
    },
    {
      name: "Marcus Johnson",
      title: "Chief Compliance Officer",
      bio: "Former US Customs director, 20+ years in international trade regulation and compliance enforcement.",
      specialty: "Regulatory",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, team.length - itemsPerView);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleTeam = team.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="team" className="py-16 px-12 md:px-20 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Built by Engineers</h2>
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed font-light">
            Infrastructure engineers with deep experience in government systems, enterprise scale, and the precise demands of institutional compliance.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTeam.map((founder, index) => (
              <div 
                key={`${currentIndex}-${index}`} 
                className={`group ${direction === 'left' ? 'carousel-item-enter-left' : direction === 'right' ? 'carousel-item-enter-right' : 'carousel-item-enter'}`}
              >
                {/* Image placeholder box - 1:1 square aspect ratio */}
                <div className="w-full aspect-square bg-card border border-foreground/10 mb-4 rounded-sm overflow-hidden flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                  <div className="text-muted-foreground text-xs uppercase tracking-widest">
                    Photo
                  </div>
                </div>

                <div className="border border-foreground/10 p-4 bg-card/30 transition-all duration-300 hover:border-primary/30 hover:bg-card/50 rounded h-64 flex flex-col">
                  <div className="mb-4">
                    <div className="text-3xl font-black text-primary/20 mb-1">
                      {String(currentIndex + index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{founder.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-xs text-primary font-semibold uppercase tracking-widest">
                        {founder.title}
                      </p>
                      <div className="inline-block text-xs text-primary font-medium px-2 py-1 bg-primary/10 border border-primary/20 uppercase tracking-wide hover:bg-primary/20 transition-colors duration-300 rounded whitespace-nowrap">
                        {founder.specialty}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light flex-1 overflow-hidden">
                    {founder.bio}
                  </p>
                  <div className="mt-4 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2 mt-8 justify-center">
            <Button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              variant="outline"
              size="icon"
              className="rounded h-10 w-10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              variant="outline"
              size="icon"
              className="rounded h-10 w-10 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex gap-1 mt-4 justify-center">
            {Array.from({ length: Math.ceil(team.length / itemsPerView) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(Math.min(idx * itemsPerView, maxIndex))}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === Math.floor(currentIndex / itemsPerView)
                    ? "bg-primary w-8"
                    : "bg-foreground/20 w-1.5"
                }`}
                aria-label={`Go to team group ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
