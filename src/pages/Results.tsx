import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart3, PieChart, TrendingUp, Fish, Dna, AlertCircle } from "lucide-react";

const Results = () => {
  // Mock data for demonstration
  const taxonomicData = [
    {
      sequenceId: "Seq_001",
      bestMatch: "Bathymodiolus thermophilus",
      confidence: 95.2,
      novelty: "Known",
      phylum: "Mollusca"
    },
    {
      sequenceId: "Seq_002", 
      bestMatch: "Calyptogena magnifica",
      confidence: 89.7,
      novelty: "Known",
      phylum: "Mollusca"
    },
    {
      sequenceId: "Seq_003",
      bestMatch: "Unknown Annelida sp.",
      confidence: 72.4,
      novelty: "Novel",
      phylum: "Annelida"
    },
    {
      sequenceId: "Seq_004",
      bestMatch: "Alvinella pompejana",
      confidence: 91.8,
      novelty: "Known",
      phylum: "Annelida"
    },
    {
      sequenceId: "Seq_005",
      bestMatch: "Rimicaris exoculata",
      confidence: 88.3,
      novelty: "Known",
      phylum: "Arthropoda"
    }
  ];

  const biodiversityMetrics = {
    speciesRichness: 12,
    shannonIndex: 2.34,
    simpsonIndex: 0.82,
    novelSpecies: 3,
    totalSequences: 157
  };

  const communityComposition = [
    { phylum: "Mollusca", count: 45, percentage: 28.7 },
    { phylum: "Annelida", count: 38, percentage: 24.2 },
    { phylum: "Arthropoda", count: 32, percentage: 20.4 },
    { phylum: "Cnidaria", count: 25, percentage: 15.9 },
    { phylum: "Porifera", count: 17, percentage: 10.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Analysis Results</h1>
          <p className="text-muted-foreground">
            Comprehensive biodiversity analysis of your eDNA sample from deep sea environments
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-ocean">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Species Richness</CardTitle>
              <Fish className="h-4 w-4 text-data-positive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{biodiversityMetrics.speciesRichness}</div>
              <p className="text-xs text-muted-foreground">Unique taxa identified</p>
            </CardContent>
          </Card>

          <Card className="shadow-ocean">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shannon Index</CardTitle>
              <BarChart3 className="h-4 w-4 text-data-info" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{biodiversityMetrics.shannonIndex}</div>
              <p className="text-xs text-muted-foreground">Diversity measure</p>
            </CardContent>
          </Card>

          <Card className="shadow-ocean">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Novel Species</CardTitle>
              <AlertCircle className="h-4 w-4 text-data-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{biodiversityMetrics.novelSpecies}</div>
              <p className="text-xs text-muted-foreground">Potential new discoveries</p>
            </CardContent>
          </Card>

          <Card className="shadow-ocean">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sequences</CardTitle>
              <Dna className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{biodiversityMetrics.totalSequences}</div>
              <p className="text-xs text-muted-foreground">Analyzed sequences</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Results Tabs */}
        <Tabs defaultValue="taxonomy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="taxonomy">Taxonomic Classification</TabsTrigger>
            <TabsTrigger value="diversity">Biodiversity Metrics</TabsTrigger>
            <TabsTrigger value="community">Community Composition</TabsTrigger>
          </TabsList>

          <TabsContent value="taxonomy" className="space-y-6">
            <Card className="shadow-ocean">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Dna className="h-6 w-6 text-primary" />
                  Taxonomic Classification Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sequence ID</TableHead>
                        <TableHead>Best Match Taxa</TableHead>
                        <TableHead>Confidence Score</TableHead>
                        <TableHead>Novelty Prediction</TableHead>
                        <TableHead>Phylum</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {taxonomicData.map((row) => (
                        <TableRow key={row.sequenceId}>
                          <TableCell className="font-mono text-sm">{row.sequenceId}</TableCell>
                          <TableCell className="font-medium">{row.bestMatch}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Progress value={row.confidence} className="w-16" />
                              <span className="text-sm">{row.confidence}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={row.novelty === "Novel" ? "destructive" : "secondary"}
                            >
                              {row.novelty}
                            </Badge>
                          </TableCell>
                          <TableCell>{row.phylum}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="diversity" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-ocean">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-data-positive" />
                    Diversity Indices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Shannon Diversity (H')</span>
                      <span className="font-bold">{biodiversityMetrics.shannonIndex}</span>
                    </div>
                    <Progress value={biodiversityMetrics.shannonIndex * 30} />
                    <p className="text-sm text-muted-foreground">
                      Higher values indicate greater diversity
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Simpson Index (D)</span>
                      <span className="font-bold">{biodiversityMetrics.simpsonIndex}</span>
                    </div>
                    <Progress value={biodiversityMetrics.simpsonIndex * 100} />
                    <p className="text-sm text-muted-foreground">
                      Measures dominance (0-1 scale)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-ocean">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-data-info" />
                    Abundance Estimates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {biodiversityMetrics.speciesRichness}
                      </div>
                      <p className="text-muted-foreground">Estimated Species</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-semibold text-data-positive">
                          {biodiversityMetrics.speciesRichness - biodiversityMetrics.novelSpecies}
                        </div>
                        <p className="text-sm text-muted-foreground">Known Species</p>
                      </div>
                      <div>
                        <div className="text-xl font-semibold text-data-warning">
                          {biodiversityMetrics.novelSpecies}
                        </div>
                        <p className="text-sm text-muted-foreground">Novel Species</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card className="shadow-ocean">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <PieChart className="h-6 w-6 text-accent" />
                  Community Composition by Phylum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communityComposition.map((group, index) => (
                    <div key={group.phylum} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{group.phylum}</span>
                        <div className="text-right">
                          <span className="font-bold">{group.count}</span>
                          <span className="text-muted-foreground ml-1">({group.percentage}%)</span>
                        </div>
                      </div>
                      <Progress value={group.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Results;