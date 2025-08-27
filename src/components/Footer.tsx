import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4 group">
                <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 logo-svg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5abd70" />
                      <stop offset="100%" stopColor="#4a9d60" />
                    </linearGradient>
                    <filter id="footerLogoGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Left stroke of V */}
                  <path 
                    d="M8 8 L16 24" 
                    stroke="url(#footerLogoGradient)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    fill="none"
                    className="logo-line left-line"
                  />
                  
                  {/* Right stroke of V */}
                  <path 
                    d="M16 24 L24 8" 
                    stroke="url(#footerLogoGradient)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    fill="none"
                    className="logo-line right-line"
                  />
                </svg>
                
                <span className="text-xl font-bold text-white font-manrope tracking-tight logo-text">
                  Vexel
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                პროფესიონალური ვებ-გვერდების შექმნა და დეველოპმენტი
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="social-link">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="social-link">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-noto-georgian">სერვისები</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">ვებსაიტების შექმნა</a></li>
              <li><a href="#" className="footer-link">SEO ოპტიმიზაცია</a></li>
              <li><a href="#" className="footer-link">კოპირაითინგი</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-noto-georgian">კონტაქტი</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 mb-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">vexelstudio1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">+995 599 443 357</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">თბილისი, საქართველო</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vexel Geo. ყველა უფლება დაცულია.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                კონფიდენციალურობა
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                პირობები
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;