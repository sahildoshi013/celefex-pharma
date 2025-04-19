import React, { useCallback, useEffect } from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll the carousel
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070&auto=format&fit=crop",
      alt: "Pharmaceutical Manufacturing Facility"
    },
    {
      src: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=2070&auto=format&fit=crop",
      alt: "Medicine Production Line"
    },
    {
      src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2070&auto=format&fit=crop",
      alt: "Quality Control in Pharmaceutical Manufacturing"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div className="embla overflow-hidden h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {carouselImages.map((image, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
                <div className="absolute inset-0 bg-black/40" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-conical-blue to-conical-purple">
              Celefex Pharma
            </span>
            <br />
            <span className="text-white">for the Future</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Developing novel therapies to address unmet needs in neurological and immunological disorders through Celefex Pharma's innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollToSection("products")}
              className="bg-conical-blue hover:bg-conical-blue/90 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Explore Products
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("products")}
          aria-label="Scroll down"
          className="hover:bg-transparent"
        >
          <ArrowDownCircle className="text-conical-navy/60 w-8 h-8" />
        </Button>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(123,31,162,0.1),rgba(0,102,204,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,174,239,0.1),transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default Hero;

