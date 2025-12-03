import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    return isDark;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-5 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-foreground/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto h-[72px] flex items-center justify-between px-12 md:px-20">
        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="MarkIt Logo" 
            className="h-8 w-auto"
          />
          <div className="text-foreground font-light text-base tracking-tight">
            MarkIt
          </div>
        </div>

        {/* Navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center h-[72px]">
          <button
            onClick={() => scrollToSection("product")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-xs tracking-widest uppercase text-nowrap h-full flex items-center px-6"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-xs tracking-widest uppercase text-nowrap h-full flex items-center px-6"
          >
            Features
          </button>
        
         

          {/* Dark mode toggle - no separator */}
          <div className="flex items-center h-full ml-auto">
            <button
              onClick={toggleDarkMode}
              className="h-full px-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707A1 1 0 003 11a1 1 0 100 2h1a1 1 0 100-2H3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707A1 1 0 003 11a1 1 0 100 2h1a1 1 0 100-2H3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => scrollToSection("investors-waitlist")}
            className="text-xs uppercase px-4 font-medium text-primary hover:opacity-90 transition-all"
          >
            Investors
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
