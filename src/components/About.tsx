
import { BadgeCheck, DnaIcon, MicroscopeIcon, PencilRuler, Users } from "lucide-react";

const About = () => {
  const approaches = [
    {
      icon: <MicroscopeIcon className="w-8 h-8 text-conical-blue" />,
      title: "Precision Medicine",
      description:
        "We're developing targeted therapies based on precise molecular understanding of disease mechanisms.",
    },
    {
      icon: <DnaIcon className="w-8 h-8 text-conical-purple" />,
      title: "Genetic Insights",
      description:
        "Our research leverages genetic data to identify and validate novel therapeutic targets.",
    },
    {
      icon: <PencilRuler className="w-8 h-8 text-conical-lightblue" />,
      title: "Rational Design",
      description:
        "We employ structure-based drug design to create molecules with optimal properties.",
    },
    {
      icon: <Users className="w-8 h-8 text-conical-purple" />,
      title: "Patient-Centered",
      description:
        "Our development programs are informed by deep understanding of patient needs and clinical challenges.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-display font-bold text-conical-navy mb-4">
            Our Approach
          </h2>
          <p className="text-conical-gray max-w-2xl mx-auto">
            At Conical Pharmaceuticals, we're dedicated to developing transformative therapies through our innovative approach to drug discovery and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 reveal">
            <h3 className="text-xl font-display font-bold text-conical-navy mb-4">
              Our Mission
            </h3>
            <p className="text-conical-gray mb-6">
              We aim to transform patient outcomes by developing precision therapeutics that target the fundamental mechanisms of disease, particularly in areas of high unmet medical need.
            </p>
            <ul className="space-y-3">
              {["Develop first-in-class therapies", "Address conditions with limited treatment options", "Improve patient quality of life"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <BadgeCheck className="w-5 h-5 text-conical-blue mr-2 mt-0.5" />
                  <span className="text-conical-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 reveal">
            <h3 className="text-xl font-display font-bold text-conical-navy mb-4">
              Our Vision
            </h3>
            <p className="text-conical-gray mb-6">
              We envision a future where neurological and immunological disorders can be treated effectively with precision therapeutics that target the underlying causes rather than just managing symptoms.
            </p>
            <ul className="space-y-3">
              {["Pioneer targeted treatment approaches", "Build a sustainable pipeline of novel therapies", "Form strategic collaborations to accelerate development"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <BadgeCheck className="w-5 h-5 text-conical-purple mr-2 mt-0.5" />
                  <span className="text-conical-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center reveal"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                {approach.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-conical-navy mb-2">
                {approach.title}
              </h3>
              <p className="text-conical-gray text-sm">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
