import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Consultation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/995555123456', '_blank');
  };

  return (
    <section id="consultation" ref={sectionRef} className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.15),transparent_60%)] animate-pulse-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_60%)] animate-float" />
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-32 right-16 w-1 h-1 bg-white/40 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-white/35 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
      </div>
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            დაგვიკავშირდით კონსულტაციისთვის
          </h2>
          
          <p className={`text-xl md:text-2xl mb-10 text-white/90 leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            გაქვთ კითხვები? დაგვიკავშირდით და ერთად შევიმუშავოთ თქვენთვის საუკეთესო გადაწყვეტა.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-10 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+995 555 12 34 56</span>
            </div>
            <div className="hidden sm:block text-white/40">•</div>
            <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@netoria.ge</span>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              variant="cta" 
              size="lg"
              onClick={openWhatsApp}
              className="text-lg px-10 py-6 h-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 transition-all duration-300 animate-pulse-glow hover-scale shadow-glow"
            >
              <MessageCircle className="mr-3 h-6 w-6 animate-pulse" />
              კონსულტაცია WhatsApp-ში
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;