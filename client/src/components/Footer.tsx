import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiInstagram, SiX, SiFacebook } from "react-icons/si";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-muted/30 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">SolidlySolo</h3>
            <p className="text-muted-foreground mb-6">
              Your destination for solo-friendly events, dining experiences, and weekend getaways. 
              Explore on your own terms.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" data-testid="link-instagram">
                <SiInstagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-twitter">
                <SiX className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-facebook">
                <SiFacebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover-elevate inline-block" data-testid="link-browse-events">Browse Events</a></li>
              <li><a href="#" className="hover-elevate inline-block" data-testid="link-how-it-works">How It Works</a></li>
              <li><a href="#" className="hover-elevate inline-block" data-testid="link-faq">FAQ</a></li>
              <li><a href="#" className="hover-elevate inline-block" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly solo event picks and exclusive perks
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter-email"
              />
              <Button size="icon" onClick={handleSubscribe} data-testid="button-subscribe">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SolidlySolo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
