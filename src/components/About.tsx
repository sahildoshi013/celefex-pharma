import { BadgeCheck, DnaIcon, MicroscopeIcon, PencilRuler, Users } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-conical-navy mb-6">
            Our Approach
          </h2>
          <p className="text-conical-gray/80 max-w-2xl mx-auto text-lg">
            At Conical Pharmaceuticals, we're dedicated to developing transformative therapies through our innovative approach to drug discovery and development.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-conical-lightpurple/20"
          >
            <h3 className="text-2xl font-display font-bold text-conical-navy mb-4 group-hover:text-conical-purple transition-colors">
              Our Mission
            </h3>
            <p className="text-conical-gray/80 mb-6 leading-relaxed">
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
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-conical-lightpurple/20"
          >
            <h3 className="text-2xl font-display font-bold text-conical-navy mb-4 group-hover:text-conical-purple transition-colors">
              Our Vision
            </h3>
            <p className="text-conical-gray/80 mb-6 leading-relaxed">
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
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:border-conical-lightpurple/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4 group-hover:bg-conical-lightpurple/10 transition-colors">
                {approach.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-conical-navy mb-3 group-hover:text-conical-purple transition-colors">
                {approach.title}
              </h3>
              <p className="text-conical-gray/80 text-sm leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
