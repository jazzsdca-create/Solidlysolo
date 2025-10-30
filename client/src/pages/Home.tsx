import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Categories } from "@/components/Categories";
import { SoloPerks } from "@/components/SoloPerks";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedEvents />
        <Categories />
        <SoloPerks />
        <Testimonials />
        <CTASection />

        {/* 💌 Join Waitlist Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Join the SolidlySolo Waitlist 🎟️
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Be first to know when we launch exclusive solo experiences and perks in your area.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </section>
      </main>
      <Footer />
    </div>
  );
}
