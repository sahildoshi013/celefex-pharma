
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductListProps {
  activeCategory: string;
}

const ProductList = ({ activeCategory }: ProductListProps) => {
  const products = [
    {
      id: "1",
      name: "CNP-001",
      category: "neurological",
      description: "Novel small molecule inhibitor for neuroinflammation",
      phase: "Phase I",
    },
    {
      id: "2",
      name: "CNP-002",
      category: "immunological",
      description: "Targeted immunomodulator for autoimmune conditions",
      phase: "Preclinical",
    },
    {
      id: "3",
      name: "CNP-003",
      category: "research",
      description: "Advanced research tool for protein degradation studies",
      phase: "Available",
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredProducts.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <Card className="hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-conical-navy">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-conical-gray mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-conical-purple font-medium">
                  {product.phase}
                </span>
                <span className="text-sm text-conical-blue capitalize">
                  {product.category}
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
