
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-display font-bold text-conical-navy">
            Celefex<span className="text-conical-blue">Pharma</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-conical-purple"
                  : "text-conical-navy hover:text-conical-purple"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-md animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium px-4 py-2 transition-colors ${
                  location.pathname === item.href
                    ? "text-conical-purple"
                    : "text-conical-navy hover:text-conical-blue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
