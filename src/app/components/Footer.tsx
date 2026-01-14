import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#F6B6A8]/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-4">
              <span className="text-white">Focus</span>
              <span className="text-[#F6B6A8]">Groups</span>
            </h3>
            <p className="text-white/60 text-sm">
              Building experiences that matter through quality retail, food, and lifestyle services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/focus-mart" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                  Focus Mart
                </Link>
              </li>
              <li>
                <Link to="/pop-ice" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                  Pop Ice
                </Link>
              </li>
              <li>
                <Link to="/focus-cafe" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                  Focus Café
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Ventures */}
          <div>
            <h4 className="text-white mb-4">Our Ventures</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Hypermarket & Retail</li>
              <li>Food & Beverage</li>
              <li>Lifestyle Products</li>
              <li>Community Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#F6B6A8] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-white/60">
              <a href="mailto:info@focusgroups.com" className="hover:text-[#F6B6A8] transition-colors">
                info@focusgroups.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F6B6A8]/10 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Focus Groups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
