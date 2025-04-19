import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-display font-bold text-conical-navy">
            Product not found
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/products"
            className="inline-flex items-center text-conical-blue hover:text-conical-navy mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-display font-bold text-conical-navy mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600">
                  Therapeutic Class: {product.category}
                </p>
                <p className="text-gray-600">
                  Dosage Form: {product.dosageForm}
                </p>
              </div>

              {/* Product Description */}
              <div className="prose max-w-none">
                <h2 className="text-xl font-display font-bold text-conical-navy">
                  Description
                </h2>
                <p className="text-gray-700">
                  {product.description}
                </p>
              </div>

              {/* Uses */}
              {product.uses && (
                <div className="prose max-w-none">
                  <h2 className="text-xl font-display font-bold text-conical-navy">
                    Uses
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {product.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dosage */}
              {product.dosage && (
                <div className="prose max-w-none">
                  <h2 className="text-xl font-display font-bold text-conical-navy">
                    Dosage
                  </h2>
                  <p className="text-gray-700">
                    {product.dosage}
                  </p>
                </div>
              )}

              {/* Side Effects */}
              {product.sideEffects && (
                <div className="prose max-w-none">
                  <h2 className="text-xl font-display font-bold text-conical-navy">
                    Side Effects
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {product.sideEffects.map((effect, index) => (
                      <li key={index}>{effect}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Precautions */}
              {product.precautions && (
                <div className="prose max-w-none">
                  <h2 className="text-xl font-display font-bold text-conical-navy">
                    Precautions
                  </h2>
                  <ul className="list-disc pl-5 text-gray-700">
                    {product.precautions.map((precaution, index) => (
                      <li key={index}>{precaution}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Storage Instructions */}
              {product.storage && (
                <div className="prose max-w-none">
                  <h2 className="text-xl font-display font-bold text-conical-navy">
                    Storage Instructions
                  </h2>
                  <p className="text-gray-700">
                    {product.storage}
                  </p>
                </div>
              )}

              {/* Packing Details */}
              {product.packing && (
                <div className="prose max-w-none">
                  <h2 className="text-xl font-display font-bold text-conical-navy">
                    Packing Details
                  </h2>
                  <p className="text-gray-700">
                    {product.packing}
                  </p>
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

export default ProductDetailsPage; 