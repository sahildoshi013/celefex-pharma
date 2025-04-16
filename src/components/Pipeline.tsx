
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";

const Pipeline = () => {
  const [activeTab, setActiveTab] = useState("discovery");
  
  interface PipelineItem {
    id: string;
    name: string;
    description: string;
    stage: string;
    indication: string;
  }

  const pipelineItems: PipelineItem[] = [
    {
      id: "cncl-001",
      name: "CNCL-001",
      description: "Novel small molecule targeting neuroinflammatory pathways implicated in neurodegeneration.",
      stage: "preclinical",
      indication: "Alzheimer's Disease",
    },
    {
      id: "cncl-002",
      name: "CNCL-002",
      description: "Selective protein degrader designed to target specific proteins involved in neuronal dysfunction.",
      stage: "discovery",
      indication: "Parkinson's Disease",
    },
    {
      id: "cncl-003",
      name: "CNCL-003",
      description: "Small molecule inhibitor of a key signaling pathway implicated in autoimmune disorders.",
      stage: "discovery",
      indication: "Multiple Sclerosis",
    },
    {
      id: "cncl-004",
      name: "CNCL-004",
      description: "Novel antibody therapy targeting specific receptors on immune cells.",
      stage: "preclinical",
      indication: "Rheumatoid Arthritis",
    },
  ];

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="pipeline" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-display font-bold text-conical-navy mb-4">
            Our Pipeline
          </h2>
          <p className="text-conical-gray max-w-2xl mx-auto">
            We're developing a portfolio of targeted therapies for neurological and immunological disorders with significant unmet needs.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full reveal" onValueChange={(value) => setActiveTab(value)}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Programs</TabsTrigger>
              <TabsTrigger value="discovery">Discovery</TabsTrigger>
              <TabsTrigger value="preclinical">Preclinical</TabsTrigger>
              <TabsTrigger value="clinical">Clinical</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pipelineItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-all duration-300 reveal">
                  <CardHeader className="bg-gradient-to-r from-conical-blue/10 to-conical-purple/10">
                    <CardTitle className="text-conical-navy">{item.name}</CardTitle>
                    <CardDescription>{item.indication}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-conical-gray">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-xs font-semibold uppercase tracking-wide text-conical-purple">
                        {item.stage}
                      </span>
                    </div>
                    <ChevronRight size={16} className="text-conical-blue" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discovery" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pipelineItems.filter(item => item.stage === "discovery").map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-conical-blue/10 to-conical-purple/10">
                    <CardTitle className="text-conical-navy">{item.name}</CardTitle>
                    <CardDescription>{item.indication}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-conical-gray">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-xs font-semibold uppercase tracking-wide text-conical-purple">
                        {item.stage}
                      </span>
                    </div>
                    <ChevronRight size={16} className="text-conical-blue" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="preclinical" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pipelineItems.filter(item => item.stage === "preclinical").map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-conical-blue/10 to-conical-purple/10">
                    <CardTitle className="text-conical-navy">{item.name}</CardTitle>
                    <CardDescription>{item.indication}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-conical-gray">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-xs font-semibold uppercase tracking-wide text-conical-purple">
                        {item.stage}
                      </span>
                    </div>
                    <ChevronRight size={16} className="text-conical-blue" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clinical" className="mt-0">
            <div className="text-center py-12">
              <p className="text-conical-gray">No clinical programs at this time.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pipeline;
