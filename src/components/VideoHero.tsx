
import React, { useEffect, useState } from 'react';
import { Play, Search, MapPin, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const VideoHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0">
        {isVideoLoaded ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop"
          >
            <source src="https://sample-videos.com/zip/10/mp4/1080p/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop" 
              alt="Luxury Property" 
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-gray-900 animate-pulse-slow" />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Headlines */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
                Discover
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white animate-slide-in-right">
                  South Africa's
                </span>
                <span className="block animate-fade-in">Finest Properties</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                From Cape Town's coastal elegance to Johannesburg's urban sophistication
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-float">1,500+</div>
                <div className="text-gray-300">Premium Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-float" style={{animationDelay: '0.5s'}}>25+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-float" style={{animationDelay: '1s'}}>R2B+</div>
                <div className="text-gray-300">Properties Sold</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Location" 
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select className="w-full px-10 py-3 bg-white/20 border border-white/30 rounded-md text-white appearance-none">
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white appearance-none">
                    <option value="">Price Range</option>
                    <option value="0-1m">R0 - R1M</option>
                    <option value="1m-5m">R1M - R5M</option>
                    <option value="5m+">R5M+</option>
                  </select>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white h-12 text-lg">
                  <Search className="mr-2" size={20} />
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                Explore Properties
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                <Play className="mr-2" size={20} />
                Watch Tour
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
