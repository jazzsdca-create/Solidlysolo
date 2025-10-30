import { CategoryCard } from "./CategoryCard";
import jazzImage from "@assets/generated_images/Jazz_performance_event_c9ee8d74.png";
import restaurantImage from "@assets/generated_images/Restaurant_bar_seating_d4845dad.png";
import getawayImage from "@assets/generated_images/Weekend_getaway_destination_763aff50.png";

const categories = [
  {
    image: jazzImage,
    title: "Live Shows",
    eventCount: 152
  },
  {
    image: restaurantImage,
    title: "Dining Experiences",
    eventCount: 89
  },
  {
    image: getawayImage,
    title: "Weekend Getaways",
    eventCount: 43
  }
];

export function Categories() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect solo experience for any mood
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
