import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { products as initialProducts } from "@/data/products";

const STORAGE_KEY = 'celefex_products';
const ITEMS_PER_PAGE = 6;

const ProductListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTherapeuticClass, setActiveTherapeuticClass] = useState<string>("all");
  const [activeDosageForm, setActiveDosageForm] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(initialProducts);

  // Load products from localStorage on mount and sync with changes
  useEffect(() => {
    const savedProducts = localStorage.getItem(STORAGE_KEY);
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setProducts(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Derive unique categories and dosage forms from products
  const { categories, dosageForms } = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    const uniqueDosageForms = new Set(products.map(p => p.dosageForm));
    
    return {
      categories: Array.from(uniqueCategories).map(id => ({
        id,
        name: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      })),
      dosageForms: Array.from(uniqueDosageForms).map(id => ({
        id,
        name: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      }))
    };
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeTherapeuticClass === "all" || product.category === activeTherapeuticClass;
      const matchesDosageForm = activeDosageForm === "all" || product.dosageForm === activeDosageForm;
      return matchesSearch && matchesCategory && matchesDosageForm;
    });
  }, [products, searchQuery, activeTherapeuticClass, activeDosageForm]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-conical-navy mb-4">
              Products
            </h1>
            <p className="text-gray-600 mb-6">
              Our products are crafted with love and compassion by professionals. We believe medicine made with a prayer to heal has a significant impact on patient recovery, regardless of location.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              {/* Therapeutic Class Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-display font-bold text-conical-navy mb-4">
                  FILTER BY THERAPEUTIC CLASS
                </h2>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="therapeutic-class"
                      value="all"
                      checked={activeTherapeuticClass === "all"}
                      onChange={(e) => {
                        setActiveTherapeuticClass(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="form-radio text-conical-blue"
                    />
                    <span className="text-gray-700">All</span>
                  </label>
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="therapeutic-class"
                        value={category.id}
                        checked={activeTherapeuticClass === category.id}
                        onChange={(e) => {
                          setActiveTherapeuticClass(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="form-radio text-conical-blue"
                      />
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dosage Form Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-display font-bold text-conical-navy mb-4">
                  FILTER BY DOSAGE FORM
                </h2>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="dosage-form"
                      value="all"
                      checked={activeDosageForm === "all"}
                      onChange={(e) => {
                        setActiveDosageForm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="form-radio text-conical-blue"
                    />
                    <span className="text-gray-700">All</span>
                  </label>
                  {dosageForms.map((form) => (
                    <label
                      key={form.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="dosage-form"
                        value={form.id}
                        checked={activeDosageForm === form.id}
                        onChange={(e) => {
                          setActiveDosageForm(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="form-radio text-conical-blue"
                      />
                      <span className="text-gray-700">{form.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-display font-medium text-conical-navy text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {categories.find(c => c.id === product.category)?.name} • {dosageForms.find(f => f.id === product.dosageForm)?.name}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded ${
                        currentPage === page
                          ? "bg-conical-blue text-white"
                          : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
