import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ProductListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTherapeuticClass, setActiveTherapeuticClass] = useState<string>("all");
  const [activeDosageForm, setActiveDosageForm] = useState<string>("all");

  const therapeuticClasses = [
    { id: "all", name: "All" },
    { id: "anti-infectives", name: "Anti-Infectives" },
    { id: "antiarthritis", name: "Antiarthritis" },
    { id: "antidiabetic", name: "Antidiabetic" },
    { id: "antiemetic", name: "Antiemetic" },
    { id: "antihistamines", name: "Antihistamines" },
    { id: "antivirals", name: "Antivirals" },
  ];

  const dosageForms = [
    { id: "all", name: "All" },
    { id: "powder", name: "Powder" },
    { id: "drops", name: "Drops" },
    { id: "nasal-solution", name: "Nasal Solution" },
    { id: "lozenges", name: "Lozenges" },
    { id: "passaries", name: "Passaries" },
    { id: "oral-spray", name: "Oral Spray" },
  ];

  const products = [
    {
      id: "1",
      name: "Bacillus clausii Spores",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=Bacillus",
      category: "anti-infectives",
      dosageForm: "powder",
    },
    {
      id: "2",
      name: "Healthy Bones",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=Healthy+Bones",
      category: "antiarthritis",
      dosageForm: "powder",
    },
    {
      id: "3",
      name: "Solmac",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=Solmac",
      category: "antiemetic",
      dosageForm: "drops",
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTherapeuticClass === "all" || product.category === activeTherapeuticClass;
    const matchesDosageForm = activeDosageForm === "all" || product.dosageForm === activeDosageForm;
    return matchesSearch && matchesCategory && matchesDosageForm;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-conical-navy mb-4">
              Product
            </h1>
            <p className="text-gray-600 mb-6">
              Our product is crafted with love and compassion by professionals. We believe medicine made with a prayer to heal has a significant impact on patient recovery, regardless of location.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                  {therapeuticClasses.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="therapeutic-class"
                        value={category.id}
                        checked={activeTherapeuticClass === category.id}
                        onChange={(e) => setActiveTherapeuticClass(e.target.value)}
                        className="form-radio text-conical-blue"
                      />
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dosage Forms Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-display font-bold text-conical-navy mb-4">
                  FILTER BY DOSAGE FORMS
                </h2>
                <div className="space-y-2">
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
                        onChange={(e) => setActiveDosageForm(e.target.value)}
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
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="p-4 border-t">
                      <h3 className="font-display font-medium text-conical-navy text-lg mb-2">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
