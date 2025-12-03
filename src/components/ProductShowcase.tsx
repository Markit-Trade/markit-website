const ProductShowcase = () => {
  return (
    <section id="product" className="py-20 px-0 md:px-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
            Intelligent Trade Compliance Platform
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed font-light">
            MarkIt transforms customs classification from manual, error-prone work into an automated, enterprise-grade process. See how institutional customers classify, audit, and govern global trade in real-time.
          </p>
        </div>

        {/* Product screenshot mockup */}
        <div className="relative rounded-lg overflow-hidden border border-foreground/10 bg-card shadow-xl hover:shadow-2xl transition-shadow duration-500">
          {/* Browser chrome */}
          <div className="bg-secondary px-6 py-3 flex items-center gap-3 border-b border-foreground/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="text-xs text-muted-foreground font-medium ml-4">markit.enterprise.io</div>
          </div>

          {/* Mock dashboard content */}
          <div className="p-8 bg-gradient-to-br from-card via-background to-card/80">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Shipment Classification</h3>
                  <p className="text-xs text-muted-foreground font-light">8 new consignments | 342 items classified</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">98.7%</div>
                  <p className="text-xs text-muted-foreground font-light mt-1">Classification Accuracy</p>
                </div>
              </div>

              {/* Table mockup */}
              <div className="space-y-2">
                <div className="grid grid-cols-6 gap-3 text-xs font-semibold text-foreground/70 uppercase tracking-wider px-3">
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">HS Code</div>
                  <div className="col-span-1">Product</div>
                  <div className="col-span-1">Supplier</div>
                  <div className="col-span-1 text-center">Confidence</div>
                  <div className="col-span-1 text-right">Action</div>
                </div>

                {[
                  { code: "6204.62", product: "Cotton Trousers", supplier: "ASIA TEXTILES CO", conf: "99%" },
                  { code: "8471.30", product: "Computer Parts", supplier: "TECH GLOBAL LTD", conf: "97%" },
                  { code: "2008.19", product: "Preserved Fruits", supplier: "AGRO EXPORTS INC", conf: "94%" },
                  { code: "6109.10", product: "Cotton Shirts", supplier: "FASHION ASIA", conf: "98%" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-6 gap-3 items-center p-2 px-3 bg-white dark:bg-foreground/5 rounded border border-foreground/5 hover:border-primary/30 transition-all duration-300">
                    <div className="col-span-1 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs font-medium text-foreground">Cleared</span>
                    </div>
                    <div className="col-span-1 font-mono font-bold text-primary text-xs">{row.code}</div>
                    <div className="col-span-1 text-xs text-foreground font-medium">{row.product}</div>
                    <div className="col-span-1 text-xs text-muted-foreground font-light">{row.supplier}</div>
                    <div className="col-span-1 text-xs font-semibold text-foreground text-center">{row.conf}</div>
                    <div className="col-span-1 text-xs font-semibold text-primary hover:underline transition-all duration-200 text-right cursor-pointer">Review</div>
                  </div>
                ))}
              </div>

              {/* Stats footer */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-primary">2.3s</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Avg Classification Time</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10,847</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Items Processed This Month</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$847K</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Audit Time Saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key capabilities below */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="group p-6 border border-foreground/10 rounded bg-card/50 hover:border-primary/30 hover:bg-primary/2 transition-all duration-300">
            <h4 className="font-bold text-foreground mb-3 text-sm">Real-time Classification</h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-light">Automatically classify HS codes with 99%+ accuracy using advanced ML, eliminating manual entry errors and compliance risk.</p>
            <div className="mt-4 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="group p-6 border border-foreground/10 rounded bg-card/50 hover:border-primary/30 hover:bg-primary/2 transition-all duration-300">
            <h4 className="font-bold text-foreground mb-3 text-sm">Audit Trail & Governance</h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-light">Complete immutable records of every classification decision, supporting defensibility in regulatory audits and customs appeals.</p>
            <div className="mt-4 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="group p-6 border border-foreground/10 rounded bg-card/50 hover:border-primary/30 hover:bg-primary/2 transition-all duration-300">
            <h4 className="font-bold text-foreground mb-3 text-sm">Enterprise Integration</h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-light">Seamless API integration with your existing ERP, customs, and logistics systems. Deploy in weeks, not months.</p>
            <div className="mt-4 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
