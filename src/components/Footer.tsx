const Footer = () => {
  return (
    <footer className="bg-background ">
      <div className="max-w-[1400px] mx-auto px-12 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-0">
          <div>
            <div className="text-foreground font-black text-base tracking-widest uppercase mb-6">
              MarkIt
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Enterprise data infrastructure for global trade compliance and institutional precision.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground mb-8 uppercase tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#founders" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Founders
                </a>
              </li>
              <li>
                <a href="#investors" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-foreground mb-8 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" border-foreground/10 pt-8">
          <p className="text-xs text-muted-foreground/60 font-light">
            © 2025 MarkIt Trade Inc. All rights reserved. | Built for institutional precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
