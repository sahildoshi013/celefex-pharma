import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products as initialProducts, Product } from "@/data/products";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = 'celefex_products';

const AdminProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>(() => {
    // Try to load from localStorage first, fallback to initialProducts
    const savedProducts = localStorage.getItem(STORAGE_KEY);
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [categorySuggestions, setCategorySuggestions] = useState<string[]>([]);
  const [dosageFormSuggestions, setDosageFormSuggestions] = useState<string[]>([]);
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
  const [showDosageFormSuggestions, setShowDosageFormSuggestions] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");
  const [dosageFormInput, setDosageFormInput] = useState("");
  const categoryInputRef = useRef<HTMLInputElement>(null);
  const dosageFormInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("adminAuth") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Update input values when editing product changes
  useEffect(() => {
    if (editingProduct) {
      setCategoryInput(categories.find(c => c.id === editingProduct.category)?.name || "");
      setDosageFormInput(dosageForms.find(f => f.id === editingProduct.dosageForm)?.name || "");
    }
  }, [editingProduct, categories, dosageForms]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingProduct({
      id: "",
      name: "",
      image: "",
      category: "",
      dosageForm: "",
      description: "",
      uses: [],
      dosage: "",
      sideEffects: [],
      precautions: [],
      storage: "",
      packing: ""
    });
    setIsAddingNew(true);
    setCategoryInput("");
    setDosageFormInput("");
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    // Convert category and dosage form inputs to IDs
    const categoryId = categoryInput.toLowerCase().replace(/\s+/g, '-');
    const dosageFormId = dosageFormInput.toLowerCase().replace(/\s+/g, '-');

    const updatedProduct = {
      ...editingProduct,
      category: categoryId,
      dosageForm: dosageFormId
    };

    let updatedProducts: Product[];
    if (isAddingNew) {
      // Generate a new ID (in a real app, this would be handled by the backend)
      const newProduct = {
        ...updatedProduct,
        id: Date.now().toString()
      };
      updatedProducts = [...products, newProduct];
    } else {
      updatedProducts = products.map(p => p.id === editingProduct.id ? updatedProduct : p);
    }

    setProducts(updatedProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));

    setEditingProduct(null);
    setIsAddingNew(false);
  };

  const handleDelete = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
  };

  const handleInputChange = (field: keyof Product, value: string | string[]) => {
    if (editingProduct) {
      // Don't update category and dosage form through this handler
      if (field === 'category' || field === 'dosageForm') return;
      
      setEditingProduct({
        ...editingProduct,
        [field]: value
      });
    }
  };

  const handleCategoryInputChange = (value: string) => {
    setCategoryInput(value);
    const searchTerm = value.toLowerCase();
    const suggestions = categories
      .filter(category => category.name.toLowerCase().includes(searchTerm))
      .map(category => category.name);
    setCategorySuggestions(suggestions);
    setShowCategorySuggestions(true);
  };

  const handleDosageFormInputChange = (value: string) => {
    setDosageFormInput(value);
    const searchTerm = value.toLowerCase();
    const suggestions = dosageForms
      .filter(form => form.name.toLowerCase().includes(searchTerm))
      .map(form => form.name);
    setDosageFormSuggestions(suggestions);
    setShowDosageFormSuggestions(true);
  };

  const handleSuggestionClick = (field: "category" | "dosageForm", value: string) => {
    if (field === "category") {
      setCategoryInput(value);
      setShowCategorySuggestions(false);
    } else {
      setDosageFormInput(value);
      setShowDosageFormSuggestions(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-display font-bold text-conical-navy">
              Manage Products
            </h1>
            <div className="space-x-4">
              <Button onClick={handleAddNew}>
                Add New Product
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>

          {/* Product List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-sm"
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
                <p className="text-sm text-gray-600 mb-4">
                  {categories.find(c => c.id === product.category)?.name} • {dosageForms.find(f => f.id === product.dosageForm)?.name}
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Edit/Add Form */}
          {editingProduct && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-display font-bold text-conical-navy mb-6">
                  {isAddingNew ? "Add New Product" : "Edit Product"}
                </h2>
                <form onSubmit={handleSave} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      value={editingProduct.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Image URL
                    </label>
                    <Input
                      value={editingProduct.image}
                      onChange={(e) => handleInputChange("image", e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <Input
                      ref={categoryInputRef}
                      value={categoryInput}
                      onChange={(e) => handleCategoryInputChange(e.target.value)}
                      onFocus={() => setShowCategorySuggestions(true)}
                      onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 200)}
                      placeholder="Type to search or add new category"
                    />
                    {showCategorySuggestions && categorySuggestions.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                        {categorySuggestions.map((suggestion) => (
                          <div
                            key={suggestion}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSuggestionClick("category", suggestion)}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dosage Form
                    </label>
                    <Input
                      ref={dosageFormInputRef}
                      value={dosageFormInput}
                      onChange={(e) => handleDosageFormInputChange(e.target.value)}
                      onFocus={() => setShowDosageFormSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowDosageFormSuggestions(false), 200)}
                      placeholder="Type to search or add new dosage form"
                    />
                    {showDosageFormSuggestions && dosageFormSuggestions.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                        {dosageFormSuggestions.map((suggestion) => (
                          <div
                            key={suggestion}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSuggestionClick("dosageForm", suggestion)}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <Textarea
                      value={editingProduct.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Uses (one per line)
                    </label>
                    <Textarea
                      value={editingProduct.uses?.join("\n")}
                      onChange={(e) => handleInputChange("uses", e.target.value.split("\n"))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dosage
                    </label>
                    <Textarea
                      value={editingProduct.dosage}
                      onChange={(e) => handleInputChange("dosage", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Side Effects (one per line)
                    </label>
                    <Textarea
                      value={editingProduct.sideEffects?.join("\n")}
                      onChange={(e) => handleInputChange("sideEffects", e.target.value.split("\n"))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Precautions (one per line)
                    </label>
                    <Textarea
                      value={editingProduct.precautions?.join("\n")}
                      onChange={(e) => handleInputChange("precautions", e.target.value.split("\n"))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Storage Instructions
                    </label>
                    <Textarea
                      value={editingProduct.storage}
                      onChange={(e) => handleInputChange("storage", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Packing Details
                    </label>
                    <Textarea
                      value={editingProduct.packing}
                      onChange={(e) => handleInputChange("packing", e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setEditingProduct(null);
                        setIsAddingNew(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminProductsPage; 