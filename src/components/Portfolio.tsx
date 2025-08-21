import { Card, CardContent } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const Portfolio = () => {
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
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ჩვენი ნამუშევრები
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            გაეცანით რამდენიმე ჩვენს მიერ შექმნილ საიტს
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 hover:shadow-card transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
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