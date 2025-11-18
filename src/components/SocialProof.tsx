const SocialProof = () => {
  const customers = [
    { name: "Global Trade Partners", logo: "GTP" },
    { name: "Asia Logistics Group", logo: "ALG" },
    { name: "International Customs", logo: "IC" },
    { name: "Enterprise Shipping Co", logo: "ESC" },
  ];

  return (
    <section className="py-12 px-8 bg-card/30">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-10">
          Trusted by leading customs brokers and enterprise logistics providers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customers.map((customer, i) => (
            <div
              key={i}
              className="group flex items-center justify-center p-4 border border-foreground/10 rounded bg-background hover:border-primary/30 hover:bg-primary/2 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="font-bold text-primary text-xs font-semibold">{customer.logo}</span>
                </div>
                <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{customer.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
