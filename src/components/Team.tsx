
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Ph.D. in Molecular Biology with over 15 years of experience in pharmaceutical R&D leadership.",
      image: "",
      initials: "SJ",
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Scientific Officer",
      bio: "Formerly led neuroscience research at leading pharmaceutical companies with expertise in neurodegeneration.",
      image: "",
      initials: "MC",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "VP of Research",
      bio: "Expert in drug discovery with focus on protein degradation and small molecule development.",
      image: "",
      initials: "ER",
    },
    {
      name: "Dr. Robert Kim",
      role: "VP of Clinical Development",
      bio: "Board-certified neurologist with extensive clinical trial experience in CNS disorders.",
      image: "",
      initials: "RK",
    },
  ];

  const advisors = [
    {
      name: "Prof. James Wilson",
      role: "Scientific Advisor",
      bio: "Professor of Neuroscience at Stanford University. Renowned expert in neuroinflammation.",
      image: "",
      initials: "JW",
    },
    {
      name: "Dr. Linda Thompson",
      role: "Clinical Advisor",
      bio: "Leading neurologist with expertise in clinical trial design for neurodegenerative diseases.",
      image: "",
      initials: "LT",
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-display font-bold text-conical-navy mb-4">
            Leadership Team
          </h2>
          <p className="text-conical-gray max-w-2xl mx-auto">
            Our team combines deep scientific expertise, clinical experience, and drug development know-how.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center reveal"
            >
              <Avatar className="w-28 h-28 mb-4">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} />
                ) : null}
                <AvatarFallback className="bg-gradient-to-br from-conical-blue to-conical-purple text-white text-xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-display font-bold text-conical-navy">
                {member.name}
              </h3>
              <p className="text-conical-purple text-sm mb-2">{member.role}</p>
              <p className="text-conical-gray text-sm mb-4">{member.bio}</p>
              <div className="flex items-center space-x-3 mt-auto">
                <a
                  href="#"
                  className="text-conical-gray hover:text-conical-blue transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="#"
                  className="text-conical-gray hover:text-conical-blue transition-colors"
                  aria-label={`${member.name}'s Twitter profile`}
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 reveal">
          <h3 className="text-2xl font-display font-bold text-conical-navy text-center mb-8">
            Scientific Advisory Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100 reveal"
              >
                <Avatar className="w-20 h-20 mb-4 sm:mb-0 sm:mr-6">
                  {advisor.image ? (
                    <AvatarImage src={advisor.image} alt={advisor.name} />
                  ) : null}
                  <AvatarFallback className="bg-gradient-to-br from-conical-lightblue to-conical-blue text-white text-xl">
                    {advisor.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-display font-bold text-conical-navy">
                    {advisor.name}
                  </h4>
                  <p className="text-conical-purple text-sm mb-2">{advisor.role}</p>
                  <p className="text-conical-gray text-sm">{advisor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
