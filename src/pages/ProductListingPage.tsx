
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import ProductFilter from "@/components/ProductFilter";

const ProductListingPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 section-padding">
        <div className="container mx-auto">
          <h1 className="text-3xl font-display font-bold text-conical-navy mb-8">
            Our Products
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <ProductFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            <div className="lg:col-span-3">
              <ProductList activeCategory={activeCategory} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
