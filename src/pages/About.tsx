import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Users, Brain, Microscope, Globe, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Marine Researcher",
      role: "Principal Investigator",
      expertise: "Deep Sea Ecology, eDNA Metabarcoding"
    },
    {
      name: "Dr. Computational Biologist", 
      role: "AI/ML Lead",
      expertise: "Machine Learning, Bioinformatics"
    },
    {
      name: "Dr. Taxonomic Expert",
      role: "Species Identification",
      expertise: "Marine Taxonomy, Systematics"
    }
  ];

  const technologies = [
    "Deep Learning Neural Networks",
    "Unsupervised Clustering Algorithms", 
    "Sequence Alignment & Phylogenetics",
    "Statistical Biodiversity Analysis",
    "High-Performance Computing",
    "Cloud-Based Processing"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About DeepSea eDNA</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of marine biodiversity research through AI-powered environmental DNA analysis
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Waves className="h-8 w-8 text-primary" />
                Project Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The DeepSea eDNA platform represents a revolutionary approach to understanding marine biodiversity 
                in the world's most remote and unexplored environments. By combining cutting-edge artificial intelligence 
                with environmental DNA sequencing, we're unlocking the genetic secrets hidden in deep ocean waters.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <Microscope className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Advanced Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    State-of-the-art AI algorithms for taxonomic classification and novel species detection
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <Globe className="h-12 w-12 text-data-positive mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Global Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Contributing to worldwide conservation efforts and climate change research
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <Brain className="h-12 w-12 text-data-info mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Pushing the boundaries of what's possible in marine biodiversity assessment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Approach */}
        <section className="mb-12">
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Brain className="h-8 w-8 text-accent" />
                Technical Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Our AI-powered pipeline combines supervised and unsupervised machine learning approaches 
                to provide comprehensive biodiversity analysis from environmental DNA samples.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-foreground mb-4">Core Technologies</h3>
                  <div className="space-y-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-foreground mb-4">Analysis Features</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Taxonomic classification with confidence scores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span>Novel species prediction using unsupervised learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-data-positive rounded-full mt-2 flex-shrink-0"></span>
                      <span>Comprehensive biodiversity metrics and indices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-data-info rounded-full mt-2 flex-shrink-0"></span>
                      <span>Interactive visualizations and phylogenetic analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Partners */}
        <section className="mb-12">
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="h-8 w-8 text-data-warning" />
                Research Partners
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Ministry of Earth Sciences (MoES)</h3>
                  <p className="text-muted-foreground mb-4">
                    Leading India's earth system science research initiatives, MoES provides strategic oversight 
                    and funding for deep ocean exploration projects.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Deep Ocean Mission support</li>
                    <li>• Research vessel access</li>
                    <li>• Scientific coordination</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">CSIR-National Institute of Oceanography (CSIR-NIO)</h3>
                  <p className="text-muted-foreground mb-4">
                    Premier marine research institute providing expertise in oceanographic sciences 
                    and deep-sea exploration technologies.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Marine biology expertise</li>
                    <li>• Sample collection protocols</li>
                    <li>• Laboratory facilities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Team */}
        <section>
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Users className="h-8 w-8 text-data-positive" />
                Research Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;