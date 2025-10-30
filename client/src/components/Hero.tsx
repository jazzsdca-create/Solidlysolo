import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@assets/generated_images/Concert_crowd_hero_image_b4751559.png";
import { useState } from "react";

export function Hero() {
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search triggered:", { location, searchQuery });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
          Your Night, Your Way
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          Explore solo-friendly events near you — from live shows to intimate restaurants to weekend getaways
        </p>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
          <div className="flex-1 relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
            <Input
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-12 h-14 bg-white/5 border-white/20 text-white placeholder:text-white/60"
              data-testid="input-location"
            />
          </div>
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
            <Input
              placeholder="Search events, dining, getaways..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-white/5 border-white/20 text-white placeholder:text-white/60"
              data-testid="input-search"
            />
          </div>
          <Button 
            size="lg" 
            className="h-14 px-8"
            onClick={handleSearch}
            data-testid="button-search"
          >
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </div>
        
        <p className="text-white/80 mt-8 text-sm">
          Join 50,000+ solo adventurers finding their perfect experiences
        </p>
      </div>
    </div>
  );
}
