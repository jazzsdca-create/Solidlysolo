import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  image: string;
  title: string;
  eventCount: number;
}

export function CategoryCard({ image, title, eventCount }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer relative h-80" data-testid={`card-category-${title.toLowerCase()}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-8">
        <h3 className="text-3xl font-bold text-white mb-2" data-testid="text-category-title">{title}</h3>
        <p className="text-white/90 mb-4">{eventCount} solo-friendly experiences</p>
        <Button variant="outline" className="w-fit bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" data-testid="button-explore">
          Explore {title}
        </Button>
      </div>
    </Card>
  );
}
