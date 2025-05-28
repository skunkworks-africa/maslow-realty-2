
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' }
  ];

  const propertyTypes = [
    { name: 'Luxury Homes', href: '#luxury' },
    { name: 'Apartments', href: '#apartments' },
    { name: 'Townhouses', href: '#townhouses' },
    { name: 'Commercial', href: '#commercial' },
    { name: 'Investment', href: '#investment' },
    { name: 'New Developments', href: '#developments' }
  ];

  const locations = [
    { name: 'Cape Town', href: '#cape-town' },
    { name: 'Johannesburg', href: '#johannesburg' },
    { name: 'Durban', href: '#durban' },
    { name: 'Pretoria', href: '#pretoria' },
    { name: 'Port Elizabeth', href: '#port-elizabeth' },
    { name: 'Stellenbosch', href: '#stellenbosch' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">SA Elite Properties</h3>
                <p className="text-gray-400">Luxury Real Estate</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              South Africa's premier luxury real estate agency, specializing in high-end properties across the country's most prestigious locations.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="text-xl font-semibold mb-6">Property Types</h4>
            <ul className="space-y-3">
              {propertyTypes.map((type, index) => (
                <li key={index}>
                  <a href={type.href} className="text-gray-300 hover:text-primary transition-colors hover:translate-x-1 transform inline-block">
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Kloof Street</p>
                  <p className="text-gray-300">Cape Town, 8001</p>
                  <p className="text-gray-300">South Africa</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+27 21 123 4567</p>
                  <p className="text-gray-300">+27 11 987 6543</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@saeliteproperties.co.za</p>
                  <p className="text-gray-300">sales@saeliteproperties.co.za</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Locations */}
        <div className="border-t border-gray-700 pt-8 mb-8 animate-fade-in">
          <h4 className="text-xl font-semibold mb-6 text-center">Popular Locations</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, index) => (
              <a 
                key={index}
                href={location.href} 
                className="bg-gray-800 hover:bg-primary px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors transform hover:scale-105"
              >
                {location.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} SA Elite Properties. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#sitemap" className="text-gray-400 hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
