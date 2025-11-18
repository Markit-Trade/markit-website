import { Button } from "@/components/ui/button";

const Investors = () => {
  return (
    <section id="investors" className="py-16 px-12 md:px-20 bg-card">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Investor Materials
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-light">
            Access our investment memo and detailed technical decks. For accredited and institutional investors only.
          </p>

          <p className="text-xs text-muted-foreground/60 leading-relaxed font-light mb-6">
            All materials are confidential and subject to non-disclosure agreements. By accessing these materials, you confirm your status as an accredited or institutional investor and agree to maintain strict confidentiality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="outline-primary" size="lg" className="px-6 font-semibold uppercase text-xs hover:shadow-lg transition-shadow duration-300">
              View Investment Memo
            </Button>
            <Button variant="outline-primary" size="lg" className="px-6 font-semibold uppercase text-xs hover:shadow-lg transition-shadow duration-300">
              Request Deck Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
