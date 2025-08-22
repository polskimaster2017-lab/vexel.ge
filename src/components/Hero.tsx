import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)] animate-float" />
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/25 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      </div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          თანამედროვე და კრეატიული<br />
          <span className="text-white drop-shadow-lg">ვებ-გვერდების დამზადება</span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          ჩვენ ვქმნით უნიკალურ და ეფექტურ საიტებს, რომლებიც დაგეხმარებათ თქვენი ბიზნესის განვითარებაში.
        </p>
        
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('services')}
            className="btn-premium text-lg px-10 py-6 h-auto hover-scale shadow-button hover:shadow-glow transition-all duration-300"
          >
            შეკვეთა
            <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;