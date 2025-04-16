
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Novel small molecule inhibitors targeting neuroinflammation in Alzheimer's disease",
      journal: "Journal of Medicinal Chemistry",
      date: "January 2025",
      authors: "Johnson S, Chen M, et al.",
      link: "#",
    },
    {
      title: "Targeted protein degradation as a therapeutic approach for neurodegenerative disorders",
      journal: "Nature Reviews Drug Discovery",
      date: "October 2024",
      authors: "Rodriguez E, Thompson L, et al.",
      link: "#",
    },
    {
      title: "Biomarker development for novel CNS-targeted therapies",
      journal: "Clinical Pharmacology & Therapeutics",
      date: "March 2024",
      authors: "Kim R, Wilson J, et al.",
      link: "#",
    },
  ];

  const news = [
    {
      title: "Conical Pharmaceuticals announces $50M Series A funding",
      source: "Press Release",
      date: "April 15, 2025",
      snippet: "Funding to advance lead candidates through preclinical development and into clinical studies.",
      link: "#",
    },
    {
      title: "Conical Pharmaceuticals enters research collaboration with Leading University",
      source: "Company News",
      date: "February 8, 2025",
      snippet: "Partnership aims to advance understanding of neuroinflammatory mechanisms in neurodegenerative disorders.",
      link: "#",
    },
  ];

  return (
    <section id="publications" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-display font-bold text-conical-navy mb-4">
            Publications & News
          </h2>
          <p className="text-conical-gray max-w-2xl mx-auto">
            Our research and company developments featured in scientific journals and media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 reveal">
            <h3 className="text-xl font-display font-bold text-conical-navy border-b border-gray-200 pb-2">
              Recent Publications
            </h3>
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-conical-navy">{pub.title}</CardTitle>
                  <CardDescription className="text-conical-purple">{pub.journal} • {pub.date}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-conical-gray text-sm">{pub.authors}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-conical-blue hover:text-conical-blue/90 hover:bg-conical-blue/10 -ml-2">
                    Read Publication <ExternalLink className="ml-1 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="space-y-6 reveal">
            <h3 className="text-xl font-display font-bold text-conical-navy border-b border-gray-200 pb-2">
              Company News
            </h3>
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-conical-navy">{item.title}</CardTitle>
                  <CardDescription className="text-conical-purple">{item.source} • {item.date}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-conical-gray text-sm">{item.snippet}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-conical-blue hover:text-conical-blue/90 hover:bg-conical-blue/10 -ml-2">
                    Read More <ExternalLink className="ml-1 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
