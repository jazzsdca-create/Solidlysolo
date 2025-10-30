import { Card } from "@/components/ui/card";
import { User, Users } from "lucide-react";
import { useState } from "react";

export function SoloModeSelector() {
  const [selectedMode, setSelectedMode] = useState<"solo" | "soft-grouping" | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Choose Your Experience</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          className={`p-6 cursor-pointer hover-elevate active-elevate-2 ${
            selectedMode === "solo" ? "border-primary border-2" : ""
          }`}
          onClick={() => {
            setSelectedMode("solo");
            console.log("Solo Mode selected");
          }}
          data-testid="card-solo-mode"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">Full Solo Mode</h4>
                {selectedMode === "solo" && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Just you, no interaction. Perfect seating for one with complete privacy and independence.
              </p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 cursor-pointer hover-elevate active-elevate-2 ${
            selectedMode === "soft-grouping" ? "border-primary border-2" : ""
          }`}
          onClick={() => {
            setSelectedMode("soft-grouping");
            console.log("Soft Grouping selected");
          }}
          data-testid="card-soft-grouping"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">Soft Grouping</h4>
                {selectedMode === "soft-grouping" && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Sit near other SolidlySolo members. Share the atmosphere without expectations to mingle.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
