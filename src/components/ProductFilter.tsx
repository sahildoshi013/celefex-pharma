
import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductFilter = ({ activeCategory, onCategoryChange }: ProductFilterProps) => {
  const categories = [
    { id: "all", name: "All Products" },
    { id: "neurological", name: "Neurological" },
    { id: "immunological", name: "Immunological" },
    { id: "research", name: "Research Tools" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="font-display font-bold text-conical-navy mb-4">Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "ghost"}
            className="justify-start"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
