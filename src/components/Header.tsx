import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "მთავარი", id: "home" },
    { name: "სერვისები", id: "services" },
    { name: "პორტფოლიო", id: "portfolio" },
    { name: "ტარიფები", id: "pricing" },
    { name: "მიმოხილვები", id: "testimonials" },
    { name: "კონტაქტი", id: "contact" }
  ];

  // Social media links - replace with actual URLs
  const socialLinks = {
    messenger: "https://m.me/vexelstudio", // Replace with actual Messenger link
    whatsapp: "https://wa.me/995599443357" // Replace with actual WhatsApp link
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              className="flex-shrink-0 logo-svg"
              aria-label="Vexel Logo"
              role="img"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5abd70" />
                  <stop offset="100%" stopColor="#4a9d60" />
                </linearGradient>
                <filter id="logoGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Left stroke of V */}
              <path 
                d="M8 8 L16 24" 
                stroke="url(#logoGradient)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                fill="none"
                className="logo-line left-line"
              />
              
              {/* Right stroke of V */}
              <path 
                d="M16 24 L24 8" 
                stroke="url(#logoGradient)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                fill="none"
                className="logo-line right-line"
              />
            </svg>
            
            <span className="text-xl font-bold text-white font-manrope tracking-tight logo-text">
              Vexel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link font-noto-georgian"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Contact */}
          <div className="hidden md:block">
            <div className="social-contact">
              <span className="text-white font-noto-georgian">მოგვწერეთ</span>
              <a 
                href={socialLinks.messenger} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on Facebook Messenger" 
                className="social-icon-link"
              >
                <img 
                  src="/src/assets/icons8-facebook-messenger-48.png" 
                  alt="Facebook Messenger" 
                  className="social-icon" 
                  width="32" 
                  height="32" 
                  loading="lazy"
                />
              </a>
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp" 
                className="social-icon-link"
              >
                <img 
                  src="/src/assets/icons8-whatsapp-48.png" 
                  alt="WhatsApp" 
                  className="social-icon" 
                  width="32" 
                  height="32" 
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white hover:text-green-400 transition-colors font-noto-georgian py-2"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </button>
              ))}
              <div className="social-contact-mobile mt-4">
                <span className="text-white font-noto-georgian block mb-2">მოგვწერეთ</span>
                <div className="flex space-x-4">
                  <a 
                    href={socialLinks.messenger} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Chat on Facebook Messenger" 
                    className="social-icon-link"
                  >
                    <img 
                      src="/src/assets/icons8-facebook-messenger-48.png" 
                      alt="Facebook Messenger" 
                      className="social-icon" 
                      width="32" 
                      height="32" 
                      loading="lazy"
                    />
                  </a>
                  <a 
                    href={socialLinks.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp" 
                    className="social-icon-link"
                  >
                    <img 
                      src="/src/assets/icons8-whatsapp-48.png" 
                      alt="WhatsApp" 
                      className="social-icon" 
                      width="32" 
                      height="32" 
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;