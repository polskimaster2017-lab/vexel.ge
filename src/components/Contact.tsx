import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      label: "ტელეფონი",
      value: "+995 599443357",
      href: "tel:+995599443357"
    },
    {
      icon: Mail,
      label: "Email",
      value: "vixelgeo@gmail.com",
      href: "mailto:vixelgeo@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/profile.php?id=788704920991496"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            კონტაქტი
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            დაგვიკავშირდით ნებისმიერი კითხვისთვის
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover-lift hover-glow bg-gradient-card border-border/50 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center hover-scale animate-scale-in">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {contact.label}
                    </h3>
                    <a 
                      href={contact.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium hover-scale inline-block"
                    >
                      {contact.value}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              სოციალური ქსელები
            </h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-muted hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-500 hover-scale hover-glow group animate-scale-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-7 h-7 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;