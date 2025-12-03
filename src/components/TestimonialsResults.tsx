import { useState, useEffect } from "react";

const TestimonialsResults = () => {
  const customers = [
    { name: "Global Trade Partners", logo: "GTP" },
    { name: "Asia Logistics Group", logo: "ALG" },
    { name: "International Customs", logo: "IC" },
    { name: "Enterprise Shipping Co", logo: "ESC" },
  ];

  const testimonials = [
    {
      quote: "Within our first month using MarkIt, we reduced manual classification time by 85% and increased accuracy from 88% to 98%. It's transformed how we handle global compliance.",
      author: "Sarah Chen",
      title: "VP of Global Trade Compliance",
      company: "Titan Logistics International",
    },
    {
      quote: "MarkIt gave us the defensibility we needed for customs audits. Every classification is now auditable, documented, and supported by the AI's reasoning. It's regulatory gold.",
      author: "James Morrison",
      title: "Chief Compliance Officer",
      company: "Enterprise Shipping Partners",
    },
    {
      quote: "The results were immediate. We processed in one week what used to take a month, freed up our team for strategic work, and eliminated costly misclassifications.",
      author: "Lisa Rodriguez",
      title: "Operations Director",
      company: "Global Trade Solutions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-12 md:px-20 bg-background">
      <div className="max-w-[1200px] mx-auto">
        {/* Trusted by section - customer logos */}
        <div className="mb-16">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-8">
            Trusted by leading customs brokers and enterprise logistics providers
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {customers.map((customer, i) => (
              <div
                key={i}
                className="group flex items-center justify-center p-3 border border-foreground/10 rounded bg-card/30 hover:border-primary/30 hover:bg-primary/2 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="font-bold text-primary text-xs font-semibold">{customer.logo}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{customer.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials section */}
        <div className="text-center space-y-10 py-10 animate-fade-up pt-16">
          <p className="text-xl md:text-2xl font-light text-foreground leading-tight max-w-4xl mx-auto">
            "{currentTestimonial.quote}"
          </p>

          {/* Author info */}
          <div className="space-y-1">
            <p className="font-bold text-sm text-foreground">{currentTestimonial.author}</p>
            <p className="text-xs text-muted-foreground font-light">
              {currentTestimonial.title} · {currentTestimonial.company}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-primary w-6 h-2 rounded-full"
                    : "bg-muted w-2 h-2 rounded-full hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Impact metrics below */}
        <div className="grid md:grid-cols-4 gap-6 pt-12">
          <div className="text-center group p-3">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">87%</div>
            <p className="text-xs text-muted-foreground font-light uppercase tracking-wide">Avg Time Reduction</p>
          </div>
          <div className="text-center group p-3">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">98%</div>
            <p className="text-xs text-muted-foreground font-light uppercase tracking-wide">Avg Accuracy Rate</p>
          </div>
          <div className="text-center group p-3">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">$2.3M</div>
            <p className="text-xs text-muted-foreground font-light uppercase tracking-wide">Avg Annual Impact</p>
          </div>
          <div className="text-center group p-3">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">30 Days</div>
            <p className="text-xs text-muted-foreground font-light uppercase tracking-wide">To Positive Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsResults;
