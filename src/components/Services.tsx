import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, User, Building } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
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

  const services = [
    {
      title: "Landing Page",
      price: "600₾",
      description: "სწრაფი და ეფექტური ერთგვერდიანი საიტი, რომელიც იდეალურია პროდუქტებისა და აქციების წარსადგენად.",
      icon: Globe,
      features: ["რესპონსიული დიზაინი", "SEO ოპტიმიზაცია", "სწრაფი ჩატვირთვა", "1 თვის მხარდაჭერა"]
    },
    {
      title: "ბიზნეს საიტი",
      price: "1200₾",
      description: "პროფესიონალური საიტი თქვენი კომპანიისთვის, სასურველი გვერდებითა და სექციებით.",
      icon: Building,
      features: ["მრავალგვერდიანი", "ადმინ პანელი", "კონტაქტის ფორმა", "2 თვის მხარდაჭერა"]
    },
    {
      title: "ონლაინ მაღაზია",
      price: "1800₾",
      description: "მთელი ფუნქციონალით, გადახდის სისტემებითა და პროდუქტების კატალოგით.",
      icon: ShoppingCart,
      features: ["ონლაინ გადახდა", "პროდუქტების მართვა", "შეკვეთების სისტემა", "3 თვის მხარდაჭერა"]
    },
    {
      title: "პორტფოლიო საიტი",
      price: "900₾",
      description: "კრეატიული პორტფოლიო დიზაინერების, ფოტოგრაფებისა და ხელოვანებისთვის.",
      icon: User,
      features: ["გალერეის ფუნქცია", "უნიკალური დიზაინი", "მობილური ვერსია", "1.5 თვის მხარდაჭერა"]
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            სერვისები და ფასები
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            აირჩიეთ თქვენთვის შესაფერისი ვებ-გვერდის ტიპი
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`hover-lift hover-glow bg-gradient-card border-border/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center hover-scale animate-scale-in">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 animate-pulse-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full btn-premium-outline hover-scale"
                    onClick={scrollToConsultation}
                  >
                    შეკვეთა
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;