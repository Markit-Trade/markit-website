import { useState } from "react";

const BusinessCase = () => {
  const features = [
    {
      id: "classification",
      title: "Real-time Classification",
      description: "Automatically classify HS codes with 99%+ accuracy using advanced ML. Eliminates manual entry errors and compliance risk.",
    },
    {
      id: "audit",
      title: "Audit Trail & Governance",
      description: "Complete immutable records of every classification decision. Supports defensibility in regulatory audits.",
    },
    {
      id: "integration",
      title: "Enterprise Integration",
      description: "Seamless API integration with your existing ERP systems. Deploy in weeks, not months.",
    },
    {
      id: "compliance",
      title: "Compliance Ready",
      description: "Meet regulatory requirements and customs audit standards. Fully compliant with HS Code standards.",
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(0);
  const current = features[selectedFeature];

  // Demo screen renderers - detailed and fleshed out
  const renderClassificationDemo = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-foreground/10">
        <div>
          <h3 className="text-sm font-bold text-foreground">Classification Queue</h3>
          <p className="text-xs text-muted-foreground font-light">5 pending | 234 completed today</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">99.2%</div>
          <p className="text-xs text-muted-foreground font-light">Accuracy</p>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { product: "Cotton Trousers", code: "6204.62", conf: "99%", supplier: "ASIA TEXTILES" },
          { product: "Electronic Tablets", code: "8471.49", conf: "97%", supplier: "TECH GLOBAL" },
          { product: "Organic Coffee Beans", code: "0901.11", conf: "98%", supplier: "AGRO EXPORTS" },
        ].map((item, i) => (
          <div key={i} className="p-2.5 bg-white dark:bg-foreground/5 rounded border border-foreground/5 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-1">
              <div className="flex-1">
                <p className="text-xs font-semibold text-foreground">{item.product}</p>
                <p className="text-xs text-muted-foreground font-light">{item.supplier}</p>
              </div>
              <div className="flex items-center gap-3 ml-3">
                <p className="text-xs text-muted-foreground font-mono font-bold text-primary">{item.code}</p>
                <div className="text-right">
                  <p className="text-xs font-bold text-foreground">{item.conf}</p>
                  <div className="w-16 h-1.5 bg-primary/20 rounded-full mt-0.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: item.conf }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">Ready for Review</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAuditDemo = () => (
    <div className="space-y-4">
      <div className="pb-3 border-b border-foreground/10">
        <h3 className="text-sm font-bold text-foreground">Decision Timeline</h3>
        <p className="text-xs text-muted-foreground font-light mt-1">HS Code 6204.62 - Cotton Trousers</p>
      </div>

      <div className="space-y-3">
        <div className="border-l-4 border-green-500 pl-3 py-2">
          <p className="text-xs font-semibold text-foreground">Classification Submitted</p>
          <p className="text-xs text-muted-foreground font-light">AI v2.3 analyzed product specifications</p>
          <p className="text-xs text-muted-foreground font-mono text-xs mt-1">14:23:45 UTC</p>
        </div>
        <div className="border-l-4 border-green-500 pl-3 py-2">
          <p className="text-xs font-semibold text-foreground">Review Completed</p>
          <p className="text-xs text-muted-foreground font-light">Sarah Chen (Compliance) approved</p>
          <p className="text-xs text-muted-foreground font-mono text-xs mt-1">14:24:02 UTC</p>
        </div>
        <div className="border-l-4 border-green-500 pl-3 py-2">
          <p className="text-xs font-semibold text-foreground">Recorded & Immutable</p>
          <p className="text-xs text-muted-foreground font-light">Entry locked in audit trail with hash</p>
          <p className="text-xs text-muted-foreground font-mono text-xs mt-1">14:24:03 UTC</p>
        </div>
      </div>

      <div className="mt-2 p-3 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded">
        <p className="text-xs text-green-700 dark:text-green-400 font-semibold">✓ Audit Ready</p>
        <p className="text-xs text-green-600 dark:text-green-300 font-light mt-1">All decisions defensible and fully documented</p>
      </div>
    </div>
  );

  const renderIntegrationDemo = () => (
    <div className="space-y-4">
      <div className="pb-3 border-b border-foreground/10">
        <h3 className="text-sm font-bold text-foreground">Connected Systems</h3>
        <p className="text-xs text-muted-foreground font-light mt-1">Real-time synchronization status</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "SAP ERP", status: "Connected", detail: "Real-time sync", color: "green" },
          { name: "Customs Portal", status: "Connected", detail: "Auto-filing enabled", color: "green" },
          { name: "REST API", status: "Active", detail: "v1.2.5 deployed", color: "green" },
          { name: "Webhooks", status: "Active", detail: "12 listeners active", color: "green" },
        ].map((sys, i) => (
          <div key={i} className="bg-white dark:bg-foreground/5 rounded border border-foreground/5 hover:border-primary/30 transition-all duration-300 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-2 h-2 rounded-full ${sys.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <p className="text-xs font-bold text-foreground">{sys.name}</p>
            </div>
            <p className="text-xs text-muted-foreground font-light mb-1">{sys.detail}</p>
            <p className="text-xs text-primary font-semibold">{sys.status}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderComplianceDemo = () => (
    <div className="space-y-4">
      <div className="pb-3 border-b border-foreground/10">
        <h3 className="text-sm font-bold text-foreground">Compliance Status</h3>
        <p className="text-xs text-muted-foreground font-light mt-1">Current regulatory compliance snapshot</p>
      </div>

      <div className="space-y-2">
        {[
          { name: "US Customs (HS Code)", status: "Compliant", updated: "Updated Jan 2025" },
          { name: "EU Combined Nomenclature", status: "Compliant", updated: "Updated Jan 2025" },
          { name: "HS Code 2024 Standards", status: "Compliant", updated: "Current version" },
          { name: "Audit Trail Standards", status: "Compliant", updated: "Immutable records" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 bg-white dark:bg-foreground/5 rounded border border-foreground/5 hover:border-primary/30 transition-all duration-300">
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground font-light">{item.updated}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-600 dark:text-green-400 font-semibold">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const demoRenderers: Record<number, () => JSX.Element> = {
    0: renderClassificationDemo,
    1: renderAuditDemo,
    2: renderIntegrationDemo,
    3: renderComplianceDemo,
  };

  return (
    <section id="features" className="py-20 px-12 md:px-20 bg-background">
      <div className="max-w-[1100px] mx-auto">
        {/* Section header - smaller */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2">
            Enterprise-Grade Trade Compliance
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-light">
            Built for institutional scale.
          </p>
        </div>

        {/* Main feature showcase */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0" style={{ height: '620px' }}>
          {/* Left sidebar with feature cells */}
          <div className="flex flex-col h-full">
            {features.map((feature, i) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(i)}
                className={`text-left p-3 border border-foreground/10 transition-all duration-300 flex-1 flex flex-col justify-start ${
                  i === selectedFeature
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-xs font-semibold leading-tight line-clamp-3">{feature.title}</div>
              </button>
            ))}
          </div>

          {/* Right main content area with app window inside */}
          <div className="md:col-span-4 bg-card p-6 flex flex-col h-full overflow-hidden">
            {/* Browser window mockup inside */}
            <div className="relative rounded-lg overflow-hidden border border-foreground/10 bg-card shadow-lg flex flex-col flex-1 min-h-0">
              {/* Browser chrome */}
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2 border-b border-foreground/10 flex-shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="text-xs text-muted-foreground font-medium ml-2">markit.enterprise.io</div>
              </div>

              {/* Demo content area - constrained height */}
              <div className="flex-1 p-5 bg-gradient-to-br from-card via-background to-card/80 overflow-y-auto min-h-0">
                {demoRenderers[selectedFeature]()}
              </div>
            </div>

            {/* Feature description outside window */}
            <div className="mt-5 space-y-2 flex-shrink-0">
              <h3 className="text-sm font-bold text-foreground">{current.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCase;
