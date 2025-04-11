
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-freeness-blue to-freeness-cyan bg-clip-text text-transparent">
                freeness
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              A peaceful digital marketplace connecting talented Tunisian freelancers with ambitious local clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-freeness-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-freeness-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-freeness-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Clients</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  How to Hire
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Talent Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Freelancers</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  How to Find Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Creating Your Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Skills Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Community Forums
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-freeness-blue transition-colors">
                  Contact
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-freeness-blue" />
                <span className="text-gray-600">Tunis, Tunisia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023-2025 Freeness. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-freeness-blue text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-freeness-blue text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-freeness-blue text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
