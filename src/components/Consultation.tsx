import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Consultation = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/995555123456', '_blank');
  };

  return (
    <section id="consultation" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            დაგვიკავშირდით კონსულტაციისთვის
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            გაქვთ კითხვები? დაგვიკავშირდით და ერთად შევიმუშავოთ თქვენთვის საუკეთესო გადაწყვეტა.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-white/80">
              📞 +995 555 12 34 56
            </div>
            <div className="hidden sm:block text-white/60">•</div>
            <div className="text-white/80">
              ✉️ info@netoria.ge
            </div>
          </div>
          
          <Button 
            variant="cta" 
            size="lg"
            onClick={openWhatsApp}
            className="text-lg px-8 py-4 h-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            კონსულტაცია WhatsApp-ში
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Consultation;