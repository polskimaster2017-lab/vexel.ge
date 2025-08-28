import { Mail, Phone, MapPin, Facebook, Instagram, Code } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center mb-4 group">
                <OptimizedImage 
                  src="/images/vixel-wordmark.svg" 
                  alt="Vixel Logo" 
                  width={140} 
                  height={40} 
                  className="flex-shrink-0"
                />
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
                <Instagram className="h-5 w-5" />
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
                <span className="text-gray-400">vixelgeo@gmail.com</span>
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
              © 2024 Vixel Geo. ყველა უფლება დაცულია.
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