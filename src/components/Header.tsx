import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          Netoria
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            მთავარი
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            სერვისები
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-foreground hover:text-primary transition-colors"
          >
            პორტფოლიო
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            კონტაქტი
          </button>
        </nav>

        <Button 
          variant="hero" 
          size="sm"
          onClick={() => scrollToSection('consultation')}
        >
          კონსულტაცია
        </Button>
      </div>
    </header>
  );
};

export default Header;