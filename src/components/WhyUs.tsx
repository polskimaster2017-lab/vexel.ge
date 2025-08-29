import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const WhyUs = () => {
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

    const element = document.getElementById('why-us');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "💻 ვებ–საიტების დამზადება",
      text: "ჩვენ ვქმნით თანამედროვე, სწრაფ და უსაფრთხო საიტებს, რომლებიც კარგად გამოიყურება ყველა მოწყობილობაზე და მარტივად იძებნება Google-ში. თითოეული გვერდი ოპტიმიზირებულია ისე, რომ კლიენტს რეალურად მოიტანოს შედეგი."
    },
    {
      title: "🚀 SEO ოპტიმიზაცია",
      text: "საიტი მხოლოდ დიზაინი არ არის. ჩვენ ვამატებთ სრულ ტექნიკურ SEO-ს: სტრუქტურულ მონაცემებს, შიდა ბმულებს და საკვანძო სიტყვებს, რათა შენი ბიზნესი Google-ში კონკურენტებზე მაღლა გამოჩნდეს."
    },
    {
      title: "✍️ კოპირაითინგი",
      text: "მხოლოდ ლამაზი საიტი საკმარისი არ არის — საჭიროა ტექსტი, რომელიც გაყიდის. ჩვენ ვამზადებთ მოკლე, გასაგებ და მიმზიდველ ტექსტებს, რომ შენი მესიჯი მომხმარებლამდე სწორი გზით მივიდეს და ისინი ქმედებაზე წავიდნენ."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-green-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-purple-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold text-center mb-8 text-white font-noto-georgian transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            რატომ უნდა აირჩიო <span style={{color: '#5abd70'}}>Vixel?</span>
          </h2>
                     <p className={`text-xl text-gray-400 max-w-3xl mx-auto font-noto-georgian transition-all duration-1000 ease-out delay-300 ${
             visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
           }`}>
             ჩვენ ვცდილობთ, რომ თითოეული პროექტი იყოს არა უბრალოდ ვებსაიტი, არამედ ძლიერი ბიზნეს–ინსტრუმენტი. აი, რატომ გვენდობიან ჩვენ:
           </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ease-out delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-400/30 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-white mb-4 font-noto-georgian group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-noto-georgian leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 ease-out delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl text-white mb-8 font-noto-georgian">
            👉 გსურს ვებსაიტი, რომელიც მუშაობს შენთვის? — დაგვიკავშირდი დღესვე.
          </p>
          <Button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button font-noto-georgian text-lg px-10 py-4 h-auto transition-all duration-300 ease-out transform hover:scale-105 group"
            aria-label="დაგვიკავშირდი - გადადი კონტაქტის განყოფილებაში"
          >
            დაგვიკავშირდი
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
