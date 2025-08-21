import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, User, Building } from "lucide-react";

const Services = () => {
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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              <Card key={index} className="relative group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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