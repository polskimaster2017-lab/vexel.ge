import { Code, Globe, Search, Palette, Smartphone, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "ვებსაიტების შექმნა",
      description: "ჩვენ არ ვქმნით უბრალოდ ვებსაიტებს. ჩვენ ვუსმენთ თქვენს იდეებს და ვქმნით ციფრულ ინსტრუმენტს, რომელიც თქვენი ბიზნესის ზრდაზე იმუშავებს.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Search,
      title: "SEO ოპტიმიზაცია",
      description: "როდესაც მომხმარებელი Google-ში ეძებს თქვენს პროდუქტს, მან უნდა გიპოვოთ თქვენ და არა კონკურენტი. ჩვენ დაგეხმარებით, რომ თქვენი საიტი საძიებო სისტემის პირველ გვერდზე გამოჩნდეს.",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: Palette,
      title: "კოპირაითინგი",
      description: "შევქმნათ დამაჯერებელი და მიმზიდველი ტექსტები თქვენი ბიზნესის ყველა პლატფორმისთვის: ვებსაიტისთვის და ბლოგისთვის, სოციალური მედიისთვის, იმეილ-მარკეტინგისთვის, სარეკლამო მასალებისთვის",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-green-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-noto-georgian">
            რას <span style={{color: '#5abd70'}}>გთავაზობთ?</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto font-noto-georgian transition-all duration-1000 ease-out delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            ჩვენ ვთავაზობთ სრულ სპექტრს ვებ დეველოპმენტის სერვისებს
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-icon">
                <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;