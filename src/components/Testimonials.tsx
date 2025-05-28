
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Cape Town",
      rating: 5,
      text: "SA Elite Properties made our dream of owning a home in Clifton a reality. Their knowledge of the Cape Town market is unmatched, and their service was exceptional throughout the entire process.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b812?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Johannesburg", 
      rating: 5,
      text: "The investment advice we received has been invaluable. Our property portfolio has grown significantly thanks to their market insights and professional guidance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Nomsa Mthembu",
      location: "Durban",
      rating: 5,
      text: "Professional, reliable, and truly understanding of what we were looking for. They found us the perfect family home in our ideal neighborhood within our budget.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Williams",
      location: "Stellenbosch",
      rating: 5,
      text: "Their expertise in the wine lands market is exceptional. We couldn't be happier with our vineyard estate purchase. Highly recommend their services.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of satisfied clients across South Africa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-white border-0 animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="text-primary mb-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote size={40} />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="text-yellow-400 fill-current animate-scale-in"
                      style={{animationDelay: `${(index * 0.2) + (i * 0.1)}s`}}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-float">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-float" style={{animationDelay: '0.5s'}}>1,200+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-float" style={{animationDelay: '1s'}}>98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-float" style={{animationDelay: '1.5s'}}>25+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
