
import Navbar from "@/components/Navbar";
import Pipeline from "@/components/Pipeline";
import Footer from "@/components/Footer";

const PipelinePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Pipeline />
      </div>
      <Footer />
    </div>
  );
};

export default PipelinePage;
