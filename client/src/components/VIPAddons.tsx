import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, Zap, Wine, Gift } from "lucide-react";
import { useState } from "react";

const addons = [
  {
    id: "early-entry",
    icon: Zap,
    title: "Early Entry",
    description: "Get in 30 minutes before doors open",
    price: 15
  },
  {
    id: "solo-swag",
    icon: Gift,
    title: "Solo Swag Bundle",
    description: "Exclusive merchandise and welcome gift",
    price: 25
  },
  {
    id: "lounge-access",
    icon: Wine,
    title: "Lounge Access",
    description: "Premium bar and lounge access",
    price: 30
  },
  {
    id: "vip-package",
    icon: Sparkles,
    title: "Full VIP Package",
    description: "All perks included + priority seating",
    price: 60
  }
];

export function VIPAddons() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
    console.log("Addon toggled:", addonId);
  };

  const totalAddonPrice = addons
    .filter(addon => selectedAddons.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">VIP Add-Ons</h3>
        <p className="text-muted-foreground">Enhance your solo experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addons.map((addon) => (
          <Card
            key={addon.id}
            className={`p-4 cursor-pointer hover-elevate ${
              selectedAddons.includes(addon.id) ? "border-primary border-2" : ""
            }`}
            onClick={() => toggleAddon(addon.id)}
            data-testid={`card-addon-${addon.id}`}
          >
            <div className="flex items-start gap-4">
              <Checkbox
                checked={selectedAddons.includes(addon.id)}
                onCheckedChange={() => toggleAddon(addon.id)}
                data-testid={`checkbox-${addon.id}`}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <addon.icon className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">{addon.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{addon.description}</p>
                <p className="text-sm font-semibold">+${addon.price}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {totalAddonPrice > 0 && (
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <span className="font-semibold">Add-ons Total:</span>
          <span className="text-xl font-bold text-primary" data-testid="text-addon-total">
            +${totalAddonPrice}
          </span>
        </div>
      )}
    </div>
  );
}
