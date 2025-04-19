import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-conical-navy text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-display font-bold">
                Celefex<span className="text-conical-lightblue">Pharma</span>
              </span>
            </div>
            <p className="text-gray-300/90 mb-8 max-w-md text-lg leading-relaxed">
              Developing transformative therapies for patients with neurological and immunological disorders through precision medicine approaches.
            </p>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <LinkedinIcon size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <TwitterIcon size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  onClick={handleHomeClick} 
                  className="text-gray-300/90 hover:text-white transition-colors text-base group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-conical-lightblue group-hover:w-4 transition-all duration-300 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  onClick={handleAboutClick} 
                  className="text-gray-300/90 hover:text-white transition-colors text-base group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-conical-lightblue group-hover:w-4 transition-all duration-300 mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  onClick={handleContactClick} 
                  className="text-gray-300/90 hover:text-white transition-colors text-base group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-conical-lightblue group-hover:w-4 transition-all duration-300 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-display font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300/90 hover:text-white transition-colors text-base group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-conical-lightblue group-hover:w-4 transition-all duration-300 mr-2" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400/80 text-sm"
        >
          <p>© {currentYear} Celefex Pharma. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
