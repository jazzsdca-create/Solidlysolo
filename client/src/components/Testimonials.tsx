import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    event: "Jazz Night at Blue Note",
    location: "NYC",
    rating: 5,
    quote: "Finally found a way to enjoy live music without the awkward 'party of one' feeling. The soft grouping option was perfect!"
  },
  {
    name: "Marcus Johnson",
    event: "Chef's Table Experience",
    location: "SF",
    rating: 5,
    quote: "The bar seat was actually better than a table! Got to chat with the chef and other solo diners. VIP perks were worth it."
  },
  {
    name: "Elena Rodriguez",
    event: "Weekend Coastal Retreat",
    location: "Monterey",
    rating: 5,
    quote: "Best solo trip ever. The lounge access and flexible cancellation gave me peace of mind. Already booked my next getaway!"
  },
  {
    name: "James Park",
    event: "Comedy Show Special",
    location: "LA",
    rating: 5,
    quote: "Solo section was genius - surrounded by people who get it. No judgment, just laughs. Express entry was a nice touch."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Solo Adventurers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our SolidlySolo community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.event} • {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
