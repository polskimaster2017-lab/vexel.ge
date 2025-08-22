import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated overlay elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent animate-float" />
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      </div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-georgian transition-all duration-1000 ease-out ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="inline-block animate-fade-in">თანამედროვე და კრეატიული</span><br />
          <span className="text-white drop-shadow-lg inline-block animate-fade-in" style={{animationDelay: '0.3s'}}>
            ვებ-გვერდების დამზადება
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed font-georgian transition-all duration-1000 ease-out ${
          subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          ჩვენ ვქმნით უნიკალურ და ეფექტურ საიტებს, რომლებიც დაგეხმარებათ თქვენს ბიზნესის განვითარებაში.
        </p>
        
        <div className={`transition-all duration-1000 ease-out ${
          buttonVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('services')}
            className="hero-cta-button font-georgian text-lg px-12 py-6 h-auto transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl bg-primary text-white hover:bg-primary-glow group"
          >
            შეუკვეთე
            <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;