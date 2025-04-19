import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 pt-20">
      <div className="container mx-auto section-padding text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          <span className="text-gradient">Precision Therapeutics</span>
          <br /> for the Future
        </h1>
        <p className="text-lg md:text-xl text-conical-navy/80 max-w-2xl mx-auto mb-10">
          Developing novel therapies to address unmet needs in neurological and immunological disorders through Celefex Pharma's innovative approach.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection("pipeline")}
            className="bg-conical-blue hover:bg-conical-blue/90"
          >
            Explore Our Pipeline
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="border-conical-purple text-conical-purple hover:bg-conical-purple/10"
          >
            About Our Approach
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("pipeline")}
          aria-label="Scroll down"
        >
          <ArrowDownCircle className="text-conical-navy/60" />
        </Button>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(123,31,162,0.1),rgba(0,102,204,0.05),transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default Hero;
