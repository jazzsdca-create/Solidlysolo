import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Solo?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of independent adventurers discovering amazing experiences on their own terms. 
          Easy cancellation. Exclusive perks. Your way, always.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" data-testid="button-explore-events">
            Explore Events
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-learn-more">
            Learn More
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          Free to join • Flexible cancellation • Premium solo experiences
        </p>
      </div>
    </section>
  );
}
