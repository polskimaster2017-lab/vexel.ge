import { Card, CardContent } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import { useEffect, useRef, useState } from "react";

const Portfolio = () => {
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

  const projects = [
    {
      title: "რესტორნის საიტი",
      description: "ელეგანტური საიტი ფინ დაინინგ რესტორნისთვის, მენიუსა და რეზერვაციის სისტემით",
      image: portfolio1,
      category: "Landing Page"
    },
    {
      title: "მოდის ონლაინ მაღაზია",
      description: "თანამედროვე ე-კომერს პლატფორმა ფეშენ ბრენდისთვის სრული ფუნქციონალით",
      image: portfolio2,
      category: "ონლაინ მაღაზია"
    },
    {
      title: "ფოტოგრაფის პორტფოლიო",
      description: "კრეატიული პორტფოლიო საიტი პროფესიონალი ფოტოგრაფისთვის",
      image: portfolio3,
      category: "პორტფოლიო საიტი"
    },
    {
      title: "კორპორატიული საიტი",
      description: "პროფესიონალური ბიზნეს საიტი IT კომპანიისთვის",
      image: portfolio4,
      category: "ბიზნეს საიტი"
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ჩვენი ნამუშევრები
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            გაეცანით რამდენიმე ჩვენს მიერ შექმნილ საიტს
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-border/50 hover-lift hover-glow bg-gradient-card transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-4 left-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium shadow-button">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-scale-in">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;