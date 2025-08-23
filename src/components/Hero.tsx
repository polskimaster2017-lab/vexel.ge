import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import programmerWorkspace from "@/assets/programmer-workspace.png";

const Hero = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setTitleVisible(true), 300);
    const timer2 = setTimeout(() => setSubtitleVisible(true), 800);
    const timer3 = setTimeout(() => setButtonVisible(true), 1300);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-start justify-center relative overflow-hidden pt-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.05) 70%, transparent 100%), url(${programmerWorkspace})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle floating animation elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/15 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 leading-tight font-noto-georgian max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } text-white drop-shadow-lg hero-title`}>
          <span className="inline-block animate-shimmer">
            ინოვაციური, სწრაფი და პროფესიონალური ვებსაიტები — ყველაფერი ერთ ადგილზე.
          </span>
        </h1>
        
        <div className={`mt-16 transition-all duration-1000 ease-out ${
          buttonVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('services')}
            className="hero-cta-button font-noto-georgian text-lg px-12 py-6 h-auto transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl bg-primary text-white hover:bg-primary-glow group"
          >
            დაიწყეთ პროექტი
            <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;