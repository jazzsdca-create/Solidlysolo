import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { User, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="font-serif text-2xl font-bold">SolidlySolo</h1>
            
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-events">
                Events
              </a>
              <a href="/" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-dining">
                Dining
              </a>
              <a href="/" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-getaways">
                Getaways
              </a>
              <a href="/vendors" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md" data-testid="link-vendors">
                For Venues
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-profile">
              <User className="h-5 w-5" />
            </Button>
            <Button className="hidden md:flex" data-testid="button-sign-in">
              Sign In
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              <a href="/" className="px-4 py-2 hover-elevate rounded-md" data-testid="link-mobile-events">Events</a>
              <a href="/" className="px-4 py-2 hover-elevate rounded-md" data-testid="link-mobile-dining">Dining</a>
              <a href="/" className="px-4 py-2 hover-elevate rounded-md" data-testid="link-mobile-getaways">Getaways</a>
              <a href="/vendors" className="px-4 py-2 hover-elevate rounded-md" data-testid="link-mobile-vendors">For Venues</a>
              <Button className="mt-2" data-testid="button-mobile-sign-in">Sign In</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
