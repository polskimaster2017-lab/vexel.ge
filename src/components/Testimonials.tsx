import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "გიორგი მაისურაძე",
      position: "CEO, TechStart Georgia",
      content: "შესანიშნავი მუშაობა! ჩვენი ვებსაიტი გახდა ბევრად უფრო პროფესიონალური და მომხმარებლებისთვის მეგობრული. გუნდი ძალიან პროფესიონალურია.",
      rating: 5
    },
    {
      name: "ნინო ბერიძე",
      position: "მარკეტინგის მენეჯერი",
      content: "SEO ოპტიმიზაციის შედეგად ჩვენი ვებსაიტის ხილვადობა საძიებო სისტემებში მნიშვნელოვნად გაიზარდა. რეკომენდაციას ვაძლევთ!",
      rating: 5
    },
    {
      name: "ლევან კაპანაძე",
      position: "დირექტორი, Creative Studio",
      content: "პორტფოლიო საიტი, რომელიც შექმნეს ჩვენთვის, უბრალოდ შესანიშნავია. ყველა კლიენტი აღფრთოვანებულია დიზაინით.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-green-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-orange-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 font-noto-georgian transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            კლიენტების <span style={{color: '#5abd70'}}>მიმოხილვები</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto font-noto-georgian transition-all duration-1000 ease-out delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            იხილეთ რას ამბობენ ჩვენს შესახებ ჩვენი კლიენტები
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="testimonial-quote">
                <Quote className="h-8 w-8" style={{color: '#5abd70'}} />
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="testimonial-author">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
