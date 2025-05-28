
import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Clifton",
      location: "Clifton, Cape Town",
      price: "R12,500,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "450 sqm",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Modern Penthouse",
      location: "Sandton, Johannesburg",
      price: "R8,750,000",
      bedrooms: 3,
      bathrooms: 2,
      area: "320 sqm",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Waterfront Apartment",
      location: "V&A Waterfront, Cape Town",
      price: "R6,200,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "180 sqm",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Golf Estate Home",
      location: "Steyn City, Johannesburg",
      price: "R15,900,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "650 sqm",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of South Africa's most prestigious properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up ${
                property.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    property.featured ? 'h-80' : 'h-64'
                  }`}
                />
                
                {/* Property Type Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                    Featured
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart size={18} className="text-gray-700 hover:text-red-500" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Share2 size={18} className="text-gray-700" />
                  </button>
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">{property.price}</div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed size={16} className="mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={16} className="mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white transform transition-transform group-hover:scale-105">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
