import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          თანამედროვე და კრეატიული<br />
          <span className="text-primary-glow">ვებ-გვერდების დამზადება</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
          ჩვენ ვქმნით უნიკალურ და ეფექტურ საიტებს, რომლებიც დაგეხმარებათ თქვენი ბიზნესის განვითარებაში.
        </p>
        
        <Button 
          variant="cta" 
          size="lg"
          onClick={() => scrollToSection('services')}
          className="text-lg px-8 py-4 h-auto"
        >
          შეკვეთა
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;