import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

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

  // Update active section when hash changes
  useEffect(() => {
    const hash = location.hash.slice(1); // Remove the # symbol
    setActiveSection(hash || (location.pathname === "/" ? "home" : location.pathname.slice(1)));
  }, [location.hash, location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('#about');
    } else {
      scrollToSection('about');
      window.history.pushState(null, '', '#about');
      setActiveSection('about');
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('#contact');
    } else {
      scrollToSection('contact');
      window.history.pushState(null, '', '#contact');
      setActiveSection('contact');
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '');
      setActiveSection('home');
    }
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('#products');
    } else {
      scrollToSection('products');
      window.history.pushState(null, '', '#products');
      setActiveSection('products');
    }
  };

  const navItems = [
    { name: "Home", href: "", onClick: handleHomeClick, section: "home" },
    { name: "About", href: "#about", onClick: handleAboutClick, section: "about" },
    { name: "Products", href: "#products", onClick: handleProductsClick, section: "products" },
    { name: "Contact", href: "#contact", onClick: handleContactClick, section: "contact" },
  ];

  const isActiveLink = (item: typeof navItems[0]) => {
    return item.section === activeSection;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.span 
            className="text-2xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-conical-navy">Celefex</span>
            <span className="text-conical-blue">Pharma</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={item.onClick}
              className="relative group"
            >
              <span className={`text-sm font-medium transition-colors ${
                isActiveLink(item)
                  ? "text-conical-purple"
                  : "text-conical-navy hover:text-conical-purple"
              }`}>
                {item.name}
              </span>
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-conical-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                isActiveLink(item) ? "scale-x-100" : ""
              }`} />
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
            className="hover:bg-transparent"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      item.onClick(e);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                    isActiveLink(item)
                      ? "text-conical-purple bg-conical-lightpurple/10"
                      : "text-conical-navy hover:text-conical-blue hover:bg-conical-lightpurple/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
