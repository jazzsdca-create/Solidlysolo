import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar, 
  Sparkles,
  BarChart3,
  Clock,
  Star,
  CheckCircle2
} from "lucide-react";
import restaurantImage from "@assets/generated_images/Restaurant_bar_seating_d4845dad.png";
import { useState } from "react";

export default function Vendors() {
  const [formData, setFormData] = useState({
    venueName: "",
    contactName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vendor inquiry submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${restaurantImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fill Every Seat.<br />Maximize Every Night.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Turn unsold single seats into premium revenue with SolidlySolo's network of 50,000+ solo adventurers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" data-testid="button-partner">
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-demo">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Active Solo Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <div className="text-muted-foreground">Seat Fill Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$1.2M+</div>
                <div className="text-muted-foreground">Revenue Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-muted-foreground">Venue Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Venues Choose SolidlySolo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your hardest-to-sell inventory into your most profitable seats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Monetize Unused Inventory</h3>
                <p className="text-muted-foreground">
                  Turn those single bar seats and odd tables into premium solo experiences. Average 30% revenue increase on previously unsold inventory.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fill Off-Peak Times</h3>
                <p className="text-muted-foreground">
                  Solo diners and attendees are flexible. Fill Tuesday nights and early shows with our active community looking for experiences.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Customer Base</h3>
                <p className="text-muted-foreground">
                  Solo travelers spend 40% more on average. Our members are professionals seeking quality experiences, not just bargains.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Zero Booking Risk</h3>
                <p className="text-muted-foreground">
                  No upfront costs. Only pay when we fill seats. Our flexible cancellation policies protect your capacity planning.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
                <p className="text-muted-foreground">
                  Dashboard insights on booking patterns, popular times, and customer preferences. Make data-driven decisions.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing Support</h3>
                <p className="text-muted-foreground">
                  Featured placement to our 50,000+ members. Professional photography, copywriting, and promotional campaigns included.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works for Venues</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple setup, immediate results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">List Your Inventory</h3>
                <p className="text-muted-foreground">
                  Add your single seats, bar spots, and odd tables to our platform. Set your own pricing and availability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">We Handle Marketing</h3>
                <p className="text-muted-foreground">
                  Our team creates compelling listings and promotes your venue to our engaged solo community.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Accept Bookings</h3>
                <p className="text-muted-foreground">
                  Receive instant notifications. Manage reservations through our simple dashboard or existing POS integration.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Paid</h3>
                <p className="text-muted-foreground">
                  Fast, weekly payouts. Keep 85% of every booking. Zero upfront costs or monthly fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Venue Partners Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "We filled 40 bar seats last month that would have sat empty. SolidlySolo turned our weakest inventory into a profit center."
                </p>
                <div className="font-semibold">Maria Chen</div>
                <div className="text-sm text-muted-foreground">Owner, Blue Note NYC</div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Tuesday nights used to be dead. Now they're our most profitable solo dining nights. The analytics helped us optimize our entire week."
                </p>
                <div className="font-semibold">James Rodriguez</div>
                <div className="text-sm text-muted-foreground">GM, Cuisine Moderne SF</div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The quality of customers is incredible. Solo travelers who become regulars. Our repeat rate went up 25%."
                </p>
                <div className="font-semibold">Alex Park</div>
                <div className="text-sm text-muted-foreground">Director, Laugh Factory LA</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground">No setup fees. No monthly costs. Only pay when we fill your seats.</p>
            </div>

            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">15%</div>
                <div className="text-xl text-muted-foreground">Commission per booking</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Unlimited listings and bookings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Professional photography and marketing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Real-time analytics dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>POS system integration support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Weekly automated payouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="px-8" data-testid="button-get-started">
                  Get Started Today
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Partner?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how SolidlySolo can help fill your venue
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Venue Name</label>
                    <Input
                      required
                      placeholder="Enter venue name"
                      value={formData.venueName}
                      onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                      data-testid="input-venue-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Contact Name</label>
                    <Input
                      required
                      placeholder="Enter your name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      data-testid="input-contact-name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tell us about your venue</label>
                  <Textarea
                    placeholder="What type of venue? How many seats? What are your goals?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                  Request Partnership Information
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
