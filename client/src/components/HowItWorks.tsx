import { Search, Ticket, Users, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Explore",
    description: "Browse solo-friendly events, dining spots, and weekend getaways near you"
  },
  {
    icon: Ticket,
    title: "Book Solo",
    description: "Get discounted pricing on single seats and bar spots with exclusive perks"
  },
  {
    icon: Users,
    title: "Choose Your Vibe",
    description: "Select full Solo Mode or Soft Grouping to match your comfort level"
  },
  {
    icon: Sparkles,
    title: "Go Your Way",
    description: "Enjoy VIP perks like early entry, lounge access, and complimentary treats"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to your perfect solo experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
