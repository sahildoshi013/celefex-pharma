import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      navigate('/#about');
    } else {
      scrollToSection('about');
      window.history.pushState(null, '', '/#about');
      setActiveSection('about');
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#contact');
    } else {
      scrollToSection('contact');
      window.history.pushState(null, '', '/#contact');
      setActiveSection('contact');
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      setActiveSection('home');
    }
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#products');
    } else {
      scrollToSection('products');
      window.history.pushState(null, '', '/#products');
      setActiveSection('products');
    }
  };

  const navItems = [
    { name: "Home", href: "/", onClick: handleHomeClick, section: "home" },
    { name: "About", href: "/#about", onClick: handleAboutClick, section: "about" },
    { name: "Products", href: "/#products", onClick: handleProductsClick, section: "products" },
    { name: "Contact", href: "/#contact", onClick: handleContactClick, section: "contact" },
  ];

  const isActiveLink = (item: typeof navItems[0]) => {
    return item.section === activeSection;
  };

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
              onClick={item.onClick}
              className={`text-sm font-medium transition-colors ${
                isActiveLink(item)
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
                onClick={(e) => {
                  if (item.onClick) {
                    item.onClick(e);
                  }
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-medium px-4 py-2 transition-colors ${
                  isActiveLink(item)
                    ? "text-conical-purple"
                    : "text-conical-navy hover:text-conical-blue"
                }`}
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
