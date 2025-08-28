import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const Portfolio = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Prokhinkali",
      description: "საქართველოს ტრადიციული კერძების რესტორანი",
      image: "/images/prokhinkali-portfolio.png",
      technologies: ["React", "Node.js", "MongoDB"],
      url: "https://prokhinkali.com",
      github: "#"
    },
    {
      title: "Simple Plants",
      description: "შინაური მცენარეების ონლაინ მაღაზია",
      image: "/images/simple-plants-portfolio.png", 
      technologies: ["Next.js", "Tailwind CSS"],
      url: "https://simple-plants.ru",
      github: "#"
    },
    {
      title: "Melakuda Store",
      description: "საქართველოს ტრადიციული ნაკეთობების მაღაზია",
      image: "/images/melakuda-store-portfolio.png",
      technologies: ["React", "Framer Motion"],
      url: "https://melakudastore.ge",
      github: "#"
    },
    {
      title: "IT-One",
      description: "IT კომპანიის კორპორატიული საიტი",
      image: "/images/it-one-portfolio.png",
      technologies: ["Vue.js", "Firebase"],
      url: "https://www.it-one.ru",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-green-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-orange-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-noto-georgian">
            ჩვენი <span style={{color: '#5abd70'}}>ნამუშევრები</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto font-noto-georgian transition-all duration-1000 ease-out delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            ნახეთ ჩვენი უახლესი პროექტები და შექმნილი ვებსაიტები
          </p>
        </div>

                <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card portfolio-item-${index + 1} transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="portfolio-image">
                <OptimizedImage 
                  src={project.image} 
                  alt={project.title}
                  className="portfolio-screenshot"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.url} className="portfolio-link">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href={project.github} className="portfolio-link">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;