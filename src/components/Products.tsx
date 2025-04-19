import { Download, Pill, Syringe, Scissors, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      title: "Human Medicine",
      description: "Our comprehensive range of human medicines includes innovative treatments for various medical conditions. From chronic diseases to acute care, we provide high-quality pharmaceutical solutions that meet international standards.",
      pdfUrl: "/products/human-medicine.pdf",
      icon: <Pill className="w-8 h-8 text-conical-blue" />
    },
    {
      title: "Cattle Medicine",
      description: "Specialized veterinary medicines for cattle health and productivity. Our products support animal welfare and help maintain healthy livestock through preventive and therapeutic solutions.",
      pdfUrl: "/products/cattle-medicine.pdf",
      icon: <Syringe className="w-8 h-8 text-conical-purple" />
    },
    {
      title: "Surgical Instruments",
      description: "High-precision surgical instruments designed for medical professionals. Our range includes essential tools for various surgical procedures, ensuring reliability and performance in critical medical situations.",
      pdfUrl: "/products/surgical-instruments.pdf",
      icon: <Scissors className="w-8 h-8 text-conical-lightblue" />
    },
    {
      title: "API Products",
      description: "Active Pharmaceutical Ingredients (APIs) manufactured to the highest quality standards. Our API products serve as the foundation for various pharmaceutical formulations, ensuring efficacy and safety.",
      pdfUrl: "/products/api-products.pdf",
      icon: <FlaskConical className="w-8 h-8 text-conical-purple" />
    }
  ];

  const handleDownload = (pdfUrl: string) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'product-list.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section id="products" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-conical-navy mb-6">
            Our Products
          </h2>
          <p className="text-conical-gray/80 max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of pharmaceutical products and solutions designed to meet various healthcare needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-conical-lightpurple/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {product.icon}
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-conical-navy group-hover:text-conical-purple transition-colors">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-conical-gray/80 mb-6 leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <Button
                    onClick={() => handleDownload(product.pdfUrl)}
                    className="bg-conical-blue hover:bg-conical-blue/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Product List
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products; 