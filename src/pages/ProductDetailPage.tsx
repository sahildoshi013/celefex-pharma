
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 section-padding">
        <ProductDetail id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
