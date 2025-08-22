import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between animate-fade-in">
        <div className="text-3xl font-bold text-primary animate-float">
          Netoria
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="nav-item text-foreground font-medium"
          >
            მთავარი
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="nav-item text-foreground font-medium"
          >
            სერვისები
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="nav-item text-foreground font-medium"
          >
            პორტფოლიო
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-item text-foreground font-medium"
          >
            კონტაქტი
          </button>
        </nav>

        <Button 
          variant="cta" 
          size="sm"
          onClick={() => scrollToSection('consultation')}
          className="btn-premium hover-glow"
        >
          კონსულტაცია
        </Button>
      </div>
    </header>
  );
};

export default Header;