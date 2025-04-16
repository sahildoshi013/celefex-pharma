
import Navbar from "@/components/Navbar";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

const PublicationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Publications />
      </div>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
