import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [uploadMethod, setUploadMethod] = useState("file");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [markerGene, setMarkerGene] = useState("");
  const [sequenceText, setSequenceText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!markerGene) {
      toast({
        title: "Missing Information",
        description: "Please select a marker gene.",
        variant: "destructive",
      });
      return;
    }

    if (uploadMethod === "file" && (!selectedFiles || selectedFiles.length === 0)) {
      toast({
        title: "No Files Selected",
        description: "Please select at least one FASTA or FASTQ file.",
        variant: "destructive",
      });
      return;
    }

    if (uploadMethod === "text" && !sequenceText.trim()) {
      toast({
        title: "No Sequence Data",
        description: "Please paste your sequence data in the text area.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Analysis Started",
        description: "Your eDNA data is being processed. Redirecting to results...",
      });
      setTimeout(() => navigate("/results"), 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Upload eDNA Data</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your sequencing files or paste sequence data directly to begin taxonomic classification 
            and biodiversity analysis of your environmental DNA samples.
          </p>
        </div>

        <Card className="shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Upload className="h-6 w-6 text-primary" />
              Data Input
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Upload Method Selection */}
              <Tabs value={uploadMethod} onValueChange={setUploadMethod} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="file">Upload Files</TabsTrigger>
                  <TabsTrigger value="text">Paste Sequences</TabsTrigger>
                </TabsList>

                <TabsContent value="file" className="mt-6">
                  <div className="space-y-4">
                    <Label htmlFor="files">Select FASTA or FASTQ Files</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Input
                        id="files"
                        type="file"
                        multiple
                        accept=".fasta,.fa,.fastq,.fq,.txt"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Label htmlFor="files" className="cursor-pointer">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">
                          Click to select files or drag and drop
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supported formats: FASTA (.fasta, .fa), FASTQ (.fastq, .fq)
                        </p>
                      </Label>
                    </div>
                    {selectedFiles && selectedFiles.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Selected files:</p>
                        {Array.from(selectedFiles).map((file, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="text" className="mt-6">
                  <div className="space-y-4">
                    <Label htmlFor="sequences">Paste Sequence Data</Label>
                    <Textarea
                      id="sequences"
                      placeholder={">Sequence_1\nATCGATCGATCGATCG...\n>Sequence_2\nGCTAGCTAGCTAGCTA..."}
                      value={sequenceText}
                      onChange={(e) => setSequenceText(e.target.value)}
                      className="min-h-[200px] font-mono text-sm"
                    />
                     <p className="text-sm text-muted-foreground">
                       Paste your sequences in FASTA format. Each sequence should start with a header line (&gt;sequence_name).
                     </p>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Marker Gene Selection */}
              <div className="space-y-2">
                <Label htmlFor="marker">Marker Gene *</Label>
                <Select value={markerGene} onValueChange={setMarkerGene}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select target marker gene" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18s">18S rRNA (Eukaryotes)</SelectItem>
                    <SelectItem value="16s">16S rRNA (Prokaryotes)</SelectItem>
                    <SelectItem value="coi">COI (Cytochrome Oxidase I)</SelectItem>
                    <SelectItem value="its">ITS (Internal Transcribed Spacer)</SelectItem>
                    <SelectItem value="12s">12S rRNA (Vertebrates)</SelectItem>
                    <SelectItem value="rbcl">rbcL (Plants)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Information Alert */}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Processing time varies based on data size. Large datasets may take several minutes to analyze. 
                  You'll be redirected to the results page once processing is complete.
                </AlertDescription>
              </Alert>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-ocean text-white shadow-ocean"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Processing Data...</>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" />
                    Start Analysis
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadPage;