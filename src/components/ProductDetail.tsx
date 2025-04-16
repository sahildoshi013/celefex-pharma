
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductDetailProps {
  id?: string;
}

const ProductDetail = ({ id }: ProductDetailProps) => {
  // This would typically fetch from an API
  const product = {
    id: id,
    name: "CNP-001",
    description: "Novel small molecule inhibitor targeting neuroinflammation in neurodegenerative disorders.",
    phase: "Phase I",
    category: "neurological",
    mechanism: "Selective inhibition of inflammatory signaling pathways",
    indications: ["Alzheimer's Disease", "Parkinson's Disease"],
    details: [
      "High target selectivity",
      "Excellent brain penetration",
      "Favorable safety profile",
      "Once-daily oral dosing",
    ],
  };

  return (
    <div className="container mx-auto">
      <Button
        variant="ghost"
        className="mb-6"
        asChild
      >
        <Link to="/products">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </Button>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-display font-bold text-conical-navy mb-4">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-block px-3 py-1 bg-conical-blue/10 text-conical-blue rounded-full text-sm">
            {product.phase}
          </span>
          <span className="inline-block px-3 py-1 bg-conical-purple/10 text-conical-purple rounded-full text-sm capitalize">
            {product.category}
          </span>
        </div>

        <p className="text-conical-gray mb-8 text-lg">
          {product.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-display font-bold text-conical-navy mb-4">
              Mechanism of Action
            </h2>
            <p className="text-conical-gray mb-6">
              {product.mechanism}
            </p>

            <h2 className="text-xl font-display font-bold text-conical-navy mb-4">
              Target Indications
            </h2>
            <ul className="list-disc list-inside text-conical-gray space-y-2">
              {product.indications.map((indication, index) => (
                <li key={index}>{indication}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-conical-navy mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-conical-gray space-y-2">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
