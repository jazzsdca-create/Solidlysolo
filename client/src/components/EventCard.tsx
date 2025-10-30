import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Tag } from "lucide-react";

interface EventCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  location: string;
  price: number;
  originalPrice?: number;
  badges?: string[];
  category: string;
}

export function EventCard({
  image,
  title,
  date,
  location,
  price,
  originalPrice,
  badges = [],
  category
}: EventCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-event-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} className="bg-primary/90 backdrop-blur-sm" data-testid={`badge-${badge.toLowerCase().replace(/\s+/g, '-')}`}>
              {badge}
            </Badge>
          ))}
        </div>
        <Badge className="absolute top-2 left-2 bg-accent/90 backdrop-blur-sm text-accent-foreground">
          {category}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-3" data-testid="text-event-title">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Solo seats from</span>
          <span className="font-bold text-lg" data-testid="text-price">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </div>
    </Card>
  );
}
