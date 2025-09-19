import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Dna, Fish, BarChart3, Upload } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Deep Sea <span className="text-primary">eDNA</span> Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Unlock the mysteries of deep ocean biodiversity through AI-powered environmental DNA analysis. 
            Identify taxa, assess ecosystem health, and discover new species from the depths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-ocean text-white shadow-ocean">
              <NavLink to="/upload">
                <Upload className="mr-2 h-5 w-5" />
                Start Analysis
              </NavLink>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* What is eDNA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is Environmental DNA?</h2>
              <p className="text-muted-foreground mb-4">
                Environmental DNA (eDNA) is genetic material shed by organisms into their environment. 
                From water samples, we can detect and identify species without seeing them directly.
              </p>
              <p className="text-muted-foreground mb-6">
                This revolutionary approach allows us to monitor biodiversity in the most remote and 
                inaccessible parts of our oceans, providing unprecedented insights into deep sea ecosystems.
              </p>
              <div className="flex items-center gap-4">
                <Dna className="h-12 w-12 text-accent" />
                <div>
                  <h3 className="font-semibold text-foreground">DNA Sequencing</h3>
                  <p className="text-sm text-muted-foreground">Extract genetic signatures from water samples</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-deep rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Why Deep Sea?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Fish className="h-5 w-5 mt-1 text-accent" />
                  <span>95% of the ocean remains unexplored</span>
                </li>
                <li className="flex items-start gap-3">
                  <Fish className="h-5 w-5 mt-1 text-accent" />
                  <span>Deep sea hosts incredible biodiversity</span>
                </li>
                <li className="flex items-start gap-3">
                  <Fish className="h-5 w-5 mt-1 text-accent" />
                  <span>Climate change impacts need monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Fish className="h-5 w-5 mt-1 text-accent" />
                  <span>New species discoveries await</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            AI-Powered Biodiversity Pipeline
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-ocean hover:shadow-glow transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Upload className="h-6 w-6 text-primary" />
                  Upload & Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload FASTA or FASTQ files from your eDNA sequencing. 
                  Our pipeline automatically processes and quality-checks your data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-ocean hover:shadow-glow transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Dna className="h-6 w-6 text-accent" />
                  AI Classification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced machine learning models identify taxa with confidence scores 
                  and predict novel species using unsupervised learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-ocean hover:shadow-glow transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-data-positive" />
                  Biodiversity Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get comprehensive biodiversity assessments including species richness, 
                  diversity indices, and community composition visualizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Explore Deep Sea Biodiversity?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join researchers worldwide in uncovering the secrets of our oceans. 
            Upload your eDNA data and discover what lies beneath.
          </p>
          <Button asChild size="lg" className="bg-gradient-ocean text-white shadow-ocean">
            <NavLink to="/upload">
              <Upload className="mr-2 h-5 w-5" />
              Start Your Analysis
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;