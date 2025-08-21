import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "ტელეფონი",
      value: "+995 555 12 34 56",
      href: "tel:+995555123456"
    },
    {
      icon: Mail,
      label: "ელ-ფოსტა",
      value: "info@netoria.ge",
      href: "mailto:info@netoria.ge"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {contact.label}
                    </h3>
                    <a 
                      href={contact.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {contact.value}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              სოციალური ქსელები
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-muted hover:bg-primary rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <IconComponent className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
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