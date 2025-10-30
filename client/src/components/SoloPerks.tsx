import { Sparkles, Zap, Wine, ParkingSquare, Gift, Clock } from "lucide-react";

const perks = [
  {
    icon: Zap,
    title: "Express Entry",
    description: "Skip the lines and get priority access to your event or reservation"
  },
  {
    icon: Sparkles,
    title: "Premium Seating",
    description: "Upgraded seats and preferred locations at no extra cost"
  },
  {
    icon: Wine,
    title: "Lounge Access",
    description: "Enjoy exclusive bar and lounge areas before or after your experience"
  },
  {
    icon: ParkingSquare,
    title: "Complimentary Parking",
    description: "Free or discounted parking at select venues"
  },
  {
    icon: Gift,
    title: "Solo Swag Bundle",
    description: "Branded merchandise and welcome gifts for first-time solo goers"
  },
  {
    icon: Clock,
    title: "Flexible Cancellation",
    description: "Change your plans worry-free with our flexible cancellation policy"
  }
];

export function SoloPerks() {
  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">VIP Solo Perks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Going solo shouldn't mean settling for less. Enjoy exclusive benefits designed for independent adventurers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <perk.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
