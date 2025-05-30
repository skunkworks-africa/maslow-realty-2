
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
      title: "Rental Asset Management",
      description: "We're here to make your rental property experience as effortless as possible—from marketing and leasing to maintenance and financial management, our comprehensive suite of services is tailored to optimize efficiency and keep your properties running smoothly.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Community Mnagaement",
      description: "At our firm, we specialize in offering comprehensive sectional title and HOA management services tailored to suit the distinct needs of our clients, prioritizing transparent and hands-on management of schemes alongside a dedicated commitment to delivering exceptional service and support.",
      color: "bg-red-500"
    },
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

      </div>
    </section>
  );
};

export default Services;
