
import React from 'react';
import { Home, TrendingUp, Users, Shield, Search, Calculator } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description: "Expert guidance through buying and selling premium properties across South Africa's most desirable locations.",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic investment advice to maximize returns in South Africa's dynamic real estate market.",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Comprehensive property management services to protect and enhance your real estate investments.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Legal Services",
      description: "Complete legal support including conveyancing, contracts, and compliance with South African property law.",
      color: "bg-red-500"
    },
    {
      icon: Search,
      title: "Property Valuation",
      description: "Accurate property valuations using advanced market analysis and local expertise.",
      color: "bg-yellow-500"
    },
    {
      icon: Calculator,
      title: "Bond Origination",
      description: "Secure the best financing options with our extensive network of banking partners.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored for the South African market
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl border-0 bg-gray-50 hover:bg-white animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-2xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-primary mx-auto mt-6 transition-all duration-500 group-hover:w-16"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-navy-800 rounded-3xl p-12 text-white animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let our experts help you find your perfect property in South Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
