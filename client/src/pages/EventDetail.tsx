import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SoloModeSelector } from "@/components/SoloModeSelector";
import { VIPAddons } from "@/components/VIPAddons";
import { Calendar, MapPin, Clock, Users, Star } from "lucide-react";
import jazzImage from "@assets/generated_images/Jazz_performance_event_c9ee8d74.png";

export default function EventDetail() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src={jazzImage}
                alt="Live Jazz Night"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge data-testid="badge-vip">VIP Available</Badge>
                <Badge data-testid="badge-soft-grouping">Soft Grouping</Badge>
                <Badge data-testid="badge-express">Express Entry</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4" data-testid="text-event-title">Live Jazz Night</h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Saturday, November 15</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>8:00 PM - 11:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>The Blue Note, NYC</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="details" className="mb-8">
              <TabsList>
                <TabsTrigger value="details" data-testid="tab-details">Details</TabsTrigger>
                <TabsTrigger value="venue" data-testid="tab-venue">Venue Info</TabsTrigger>
                <TabsTrigger value="perks" data-testid="tab-perks">Solo Perks</TabsTrigger>
                <TabsTrigger value="reviews" data-testid="tab-reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-muted-foreground">
                    Experience an intimate evening of live jazz at the legendary Blue Note. 
                    Our solo-friendly seating ensures you have the perfect spot to enjoy world-class 
                    musicians in an iconic venue. Choose between bar seating with a view of the stage 
                    or premium solo tables.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Tonight's lineup features the Marcus Johnson Trio, known for their soulful 
                    interpretations of jazz standards and original compositions. The show includes 
                    two sets with a short intermission.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="venue" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">131 W 3rd St, New York, NY 10012</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Accessibility</h3>
                    <p className="text-muted-foreground">Wheelchair accessible • Elevator available</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Parking</h3>
                    <p className="text-muted-foreground">Street parking available • Garage nearby</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="perks" className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Premium Bar Seating</h4>
                      <p className="text-sm text-muted-foreground">Best view of the stage with single-seat configuration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Complimentary First Drink</h4>
                      <p className="text-sm text-muted-foreground">Solo ticket includes one complimentary beverage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Flexible Cancellation</h4>
                      <p className="text-sm text-muted-foreground">Cancel up to 24 hours before for full refund</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-bold">4.9</div>
                    <div>
                      <div className="flex gap-1 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">Based on 127 reviews</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-2">
                        "Perfect solo night out! The bar seating was intimate and the soft grouping 
                        option meant I was near other solo jazz fans. Great vibe!"
                      </p>
                      <p className="text-sm text-muted-foreground">- Sarah C. • 2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="border rounded-lg p-6 space-y-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold" data-testid="text-price">$35</span>
                    <span className="text-lg text-muted-foreground line-through">$50</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Solo seat pricing</p>
                </div>

                <SoloModeSelector />
                <VIPAddons />

                <div className="space-y-3">
                  <Button className="w-full" size="lg" data-testid="button-book">
                    Book Your Solo Spot
                  </Button>
                  <Button variant="outline" className="w-full" data-testid="button-save">
                    Save for Later
                  </Button>
                </div>

                <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>23 solo spots remaining</span>
                  </div>
                  <p>Free cancellation up to 24 hours before</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
