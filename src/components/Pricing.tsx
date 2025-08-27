import { Check } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";

const Pricing = () => {
  const { openContactModal } = useModal();

  const pricingPlans = [
    {
      title: "Landing Page",
      description: "სწრაფი და ეფექტური ერთგვერდიანი საიტი",
      price: "500",
      features: [
        "რესპონსიული დიზაინი",
        "SEO ოპტიმიზაცია",
        "სწრაფი ჩატვირთვა",
        "კონტაქტის ფორმა",
        "1 თვის მხარდაჭერა",
        "Google Analytics"
      ],
      popular: false
    },
    {
      title: "ბიზნეს საიტი",
      description: "პროფესიონალური საიტი თქვენი კომპანიისთვის",
      price: "1000",
      features: [
        "მრავალგვერდიანი საიტი",
        "ადმინ პანელი",
        "ბლოგის სისტემა",
        "კონტაქტის ფორმა",
        "2 თვის მხარდაჭერა",
        "SSL სერტიფიკატი"
      ],
      popular: true
    },
    {
      title: "ინტერნეტ-მაღაზია",
      description: "სრულფუნქციონალური ონლაინ მაღაზია",
      price: "1500",
      features: [
        "პროდუქტების კატალოგი",
        "ონლაინ გადახდა",
        "შეკვეთების მართვა",
        "მომხმარებლების პანელი",
        "3 თვის მხარდაჭერა",
        "მობილური აპლიკაცია"
      ],
      popular: false
    },
    {
      title: "Custom/Enterprise",
      description: "ინდივიდუალური გადაწყვეტა თქვენი ბიზნესისთვის",
      price: "3000",
      features: [
        "ინდივიდუალური დიზაინი",
        "რთული ფუნქციონალი",
        "API ინტეგრაცია",
        "უსაზღვრო მხარდაჭერა",
        "პროექტის მენეჯერი",
        "წარმადობის ოპტიმიზაცია"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-green-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-orange-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-noto-georgian">
              ტარიფები და <span style={{color: '#5abd70'}}>ფასები</span>
            </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-noto-georgian mb-8">
            აირჩიეთ თქვენთვის შესაფერისი პაკეტი
          </p>

          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
                         <div
               key={index}
               className="pricing-card relative"
             >
              

              <div className="pricing-header">
                <h3 className="pricing-title">{plan.title}</h3>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <div className="pricing-price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-currency"> ლ-დან</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing-feature">
                    <Check className="h-5 w-5 flex-shrink-0" style={{color: '#5abd70'}} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="js-open-contact-modal pricing-button"
                onClick={openContactModal}
              >
                აირჩიე პაკეტი
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
