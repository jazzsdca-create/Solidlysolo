import { EventCard } from "./EventCard";
import jazzImage from "@assets/generated_images/Jazz_performance_event_c9ee8d74.png";
import restaurantImage from "@assets/generated_images/Restaurant_bar_seating_d4845dad.png";
import comedyImage from "@assets/generated_images/Comedy_show_event_3f130edc.png";
import festivalImage from "@assets/generated_images/Food_festival_event_1733f88f.png";
import getawayImage from "@assets/generated_images/Weekend_getaway_destination_763aff50.png";

const events = [
  {
    id: "1",
    image: jazzImage,
    title: "Live Jazz Night",
    date: "Sat, Nov 15 • 8:00 PM",
    location: "The Blue Note, NYC",
    price: 35,
    originalPrice: 50,
    badges: ["VIP Available", "Soft Grouping"],
    category: "Live Shows"
  },
  {
    id: "2",
    image: restaurantImage,
    title: "Chef's Table Experience",
    date: "Fri, Nov 14 • 7:30 PM",
    location: "Cuisine Moderne, SF",
    price: 85,
    originalPrice: 120,
    badges: ["Express Entry", "Bar Seat"],
    category: "Dining"
  },
  {
    id: "3",
    image: comedyImage,
    title: "Comedy Night Special",
    date: "Thu, Nov 13 • 9:00 PM",
    location: "Laugh Factory, LA",
    price: 25,
    badges: ["Solo Section", "VIP Available"],
    category: "Live Shows"
  },
  {
    id: "4",
    image: festivalImage,
    title: "Street Food Festival",
    date: "Sun, Nov 16 • 12:00 PM",
    location: "Riverside Park, Portland",
    price: 15,
    badges: ["Flexible Cancel"],
    category: "Dining"
  },
  {
    id: "5",
    image: getawayImage,
    title: "Coastal Retreat Weekend",
    date: "Fri-Sun, Nov 21-23",
    location: "Seaside Resort, Monterey",
    price: 299,
    originalPrice: 450,
    badges: ["VIP Available", "Lounge Access"],
    category: "Getaways"
  },
  {
    id: "6",
    image: jazzImage,
    title: "Acoustic Sessions",
    date: "Wed, Nov 19 • 8:30 PM",
    location: "Coffeehouse Live, Seattle",
    price: 20,
    badges: ["Solo Section"],
    category: "Live Shows"
  }
];

export function FeaturedEvents() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Solo Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked events perfect for solo adventurers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
