const ProductOverview = () => {
  const features = [
    {
      title: "AI-Powered HS Code Classification",
      description:
        "Automatically classify products to the correct HS code with 98%+ accuracy. Eliminates manual entry errors and reduces customs penalties.",
    },
    {
      title: "Real-Time Compliance Auditing",
      description:
        "Every classification is logged with full decision trails. Defend your classifications in customs disputes with complete, auditable records.",
    },
    {
      title: "Enterprise Integration APIs",
      description:
        "Seamlessly connect to your ERP, customs management, and logistics systems. Deploy in weeks, not months.",
    },
    {
      title: "Global Trade Coverage",
      description:
        "Support for HS codes, HTS schedules, and regulatory frameworks across major trading jurisdictions worldwide.",
    },
  ];

  return (
    <section id="capabilities" className="py-16 px-12 md:px-20 bg-background">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
            Enterprise-Grade Trade Compliance
          </h2>
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed font-light">
            MarkIt's intelligent platform eliminates manual classification work and provides complete regulatory defensibility. Built for institutional scale, security, and compliance.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-foreground/10 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/2 overflow-visible rounded"
            >
              {/* Background accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded" />

              <div className="relative z-10">
                <h3 className="text-base font-bold text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
                
                {/* Bottom accent line on hover */}
                <div className="mt-4 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
