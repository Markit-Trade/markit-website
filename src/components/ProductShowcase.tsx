import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  CheckCircle2, 
  Clock, 
  FileText, 
  AlertCircle, 
  Package, 
  TrendingUp, 
  ShieldCheck,
  ArrowRight,
  Loader2,
  ChevronUp,
  ChevronDown,
  Maximize2,
  Minimize2
} from "lucide-react";
import WorkflowEditor from "@/components/demo/WorkflowEditor";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [isDashboardCollapsed, setIsDashboardCollapsed] = useState(false);
  const [stats, setStats] = useState({
    processed: 10847,
    accuracy: 98.7,
    saved: 847,
    pending: 12
  });

  const [activeStage, setActiveStage] = useState<"ingest" | "classify" | "review" | "export">("ingest");

  const [jobs, setJobs] = useState([
    { id: 1, name: "Invoice_Batch_2024_10.pdf", status: "processing", progress: 65 },
    { id: 2, name: "Customs_Entry_HK_002.xml", status: "queued", progress: 0 },
    { id: 3, name: "ERP_Sync_Daily_Log", status: "completed", progress: 100 },
    { id: 4, name: "Audit_Report_Q3_Final.pdf", status: "queued", progress: 0 },
  ]);

  const [stream, setStream] = useState([
    { id: 1, product: "Industrial Ball Bearing", code: "8482.10", conf: 99, status: "cleared" },
    { id: 2, product: "Cotton Men's Shirt", code: "6105.10", conf: 98, status: "cleared" },
    { id: 3, product: "Hydraulic Pump Parts", code: "8413.91", conf: 95, status: "review" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle stages
      setActiveStage(prev => {
        if (prev === "ingest") return "classify";
        if (prev === "classify") return "review";
        if (prev === "review") return "export";
        return "ingest";
      });

      // Update stats
      setStats(prev => ({
        processed: prev.processed + Math.floor(Math.random() * 3),
        accuracy: Math.min(99.9, Math.max(98.0, prev.accuracy + (Math.random() * 0.2 - 0.1))),
        saved: prev.saved + (Math.random() * 0.1),
        pending: Math.max(5, prev.pending + (Math.random() > 0.5 ? 1 : -1))
      }));

      // Simulate job progress more dynamically
      setJobs(prev => {
        const newJobs = prev.map(job => {
          if (job.status === "processing") {
            const newProgress = Math.min(100, job.progress + 10);
            return { 
              ...job, 
              progress: newProgress, 
              status: newProgress === 100 ? "completed" : "processing" 
            };
          } else if (job.status === "queued" && Math.random() > 0.7) {
             return { ...job, status: "processing", progress: 5 };
          }
          return job;
        });

        // Remove completed jobs occasionally and add new ones
        if (Math.random() > 0.7) {
           const activeJobs = newJobs.filter(j => j.status !== "completed" || Math.random() > 0.5);
           if (activeJobs.length < 5) {
             activeJobs.push({
               id: Date.now(),
               name: `Doc_${Math.floor(Math.random() * 1000)}.pdf`,
               status: "queued",
               progress: 0
             });
           }
           return activeJobs;
        }
        return newJobs;
      });

      // Simulate new stream items
      if (Math.random() > 0.4) {
        const newItems = [
          { product: "Circuit Board Assembly", code: "8534.00", conf: 97, status: "cleared" },
          { product: "Leather Handbag", code: "4202.21", conf: 96, status: "cleared" },
          { product: "Steel Screws", code: "7318.15", conf: 99, status: "cleared" },
          { product: "Plastic Granules", code: "3901.10", conf: 94, status: "review" },
        ];
        const randomItem = newItems[Math.floor(Math.random() * newItems.length)];
        setStream(prev => [{ ...randomItem, id: Date.now() }, ...prev.slice(0, 4)]);
      }

    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product" className="py-20 px-12 md:px-20 bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
                Intelligent Trade Compliance Platform
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                MarkIt transforms customs classification from manual, error-prone work into an automated, enterprise-grade process. See how institutional customers classify, audit, and govern global trade in real-time.
              </p>
            </div>
          </div>

          {/* Right Column: Demo */}
          <div className="lg:col-span-9">
            <div className="relative rounded-lg overflow-hidden border border-foreground/10 bg-card shadow-xl hover:shadow-2xl transition-shadow duration-500">
          
          {/* Browser chrome */}
          <div className="bg-secondary px-4 py-2 flex items-center justify-between border-b border-foreground/10">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] text-muted-foreground font-medium">markit.enterprise.io</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-muted-foreground font-medium">System Operational</span>
            </div>
          </div>

          <div className="flex flex-col transition-all duration-500 ease-in-out" style={{ height: isDashboardCollapsed ? '450px' : 'auto' }}>
            {/* Top: Workflow Editor */}
            <div 
               className="w-full border-b border-foreground/10 bg-muted/10 relative group transition-all duration-500 ease-in-out"
               style={{ height: isDashboardCollapsed ? '450px' : '180px' }}
            >
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                <Badge variant="outline" className="bg-background/80 backdrop-blur text-[10px] font-normal text-muted-foreground flex items-center gap-1.5 h-5 px-2">
                  <Activity className="w-3 h-3 text-primary" />
                  Live Pipeline
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] font-medium h-5 px-2">
                  Pipeline: Global Import Standard v2.1
                </Badge>
              </div>
              
              <div className="absolute bottom-3 right-3 z-10">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsDashboardCollapsed(!isDashboardCollapsed)}
                  className="h-7 text-[10px] font-medium bg-background/80 backdrop-blur border-foreground/10 hover:bg-background shadow-sm gap-1.5"
                >
                  {isDashboardCollapsed ? (
                    <>
                      <Minimize2 className="w-3 h-3" />
                      Show Dashboard
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3 h-3" />
                      Full Pipeline
                    </>
                  )}
                </Button>
              </div>

              <WorkflowEditor activeStage={activeStage} />
            </div>

            {/* Bottom: Dashboard */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDashboardCollapsed ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
              <div className="p-4 bg-gradient-to-br from-card via-background to-card/80">
              
              {/* KPI Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="p-3 rounded border border-foreground/5 bg-card/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Accuracy</span>
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stats.accuracy.toFixed(1)}%</div>
                </div>
                <div className="p-3 rounded border border-foreground/5 bg-card/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Processed</span>
                    <Package className="w-3 h-3 text-blue-500" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stats.processed.toLocaleString()}</div>
                </div>
                <div className="p-3 rounded border border-foreground/5 bg-card/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Pending</span>
                    <Clock className="w-3 h-3 text-amber-500" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stats.pending}</div>
                </div>
                <div className="p-3 rounded border border-foreground/5 bg-card/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Risk Score</span>
                    <ShieldCheck className="w-3 h-3 text-primary" />
                  </div>
                  <div className="text-xl font-bold text-foreground">Low</div>
                </div>
              </div>

              {/* Main Content Area with Drawer */}
              <div className="relative h-[220px] overflow-hidden rounded border border-foreground/5 bg-card/30">
                
                {/* Live Stream (Background Layer) */}
                <div className="absolute inset-0 p-3 flex flex-col pl-12 transition-all duration-300">
                  <div className="flex items-center justify-between h-6 mb-2">
                    <h4 className="text-xs font-bold text-foreground">Live Classification Stream</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Real-time</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="grid grid-cols-10 gap-2 text-[9px] font-semibold text-muted-foreground uppercase tracking-wider px-2 pb-1.5 border-b border-foreground/5 shrink-0">
                      <div className="col-span-4">Product</div>
                      <div className="col-span-2">HS Code</div>
                      <div className="col-span-2 text-center">Confidence</div>
                      <div className="col-span-2 text-center">Status</div>
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-1.5 mt-1.5">
                      <AnimatePresence initial={false} mode="popLayout">
                        {stream.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-10 gap-2 items-center p-2 bg-card/40 rounded border border-foreground/5 hover:border-primary/20 transition-colors flex-1"
                          >
                            <div className="col-span-4 text-[10px] font-medium text-foreground truncate">{item.product}</div>
                            <div className="col-span-2 font-mono text-[10px] text-primary">{item.code}</div>
                            <div className="col-span-2 text-[10px] text-center">
                              <span className={`px-1.5 py-0.5 rounded-full ${item.conf > 95 ? 'bg-green-500/10 text-green-600' : 'bg-amber-500/10 text-amber-600'}`}>
                                {item.conf}%
                              </span>
                            </div>
                            <div className="col-span-2 flex justify-center">
                              {item.status === "cleared" ? (
                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                              ) : (
                                <AlertCircle className="w-3 h-3 text-amber-500" />
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Ingest Queue (Drawer Layer) */}
                <motion.div 
                  initial={false}
                  animate={{ width: isQueueOpen ? 240 : 40 }}
                  className="absolute left-0 top-0 bottom-0 bg-background/95 backdrop-blur border-r border-foreground/10 z-10 overflow-hidden transition-all duration-300 shadow-xl"
                  onMouseEnter={() => setIsQueueOpen(true)}
                  onMouseLeave={() => setIsQueueOpen(false)}
                >
                  <div className="h-full flex flex-col w-[240px]"> {/* Fixed width container to prevent content squishing */}
                    <div className="h-10 flex items-center px-3 border-b border-foreground/5 bg-muted/20">
                      <div className="w-4 flex justify-center shrink-0">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <motion.div 
                        animate={{ opacity: isQueueOpen ? 1 : 0 }} 
                        className="ml-3 text-xs font-bold text-foreground whitespace-nowrap overflow-hidden"
                      >
                        Ingest Queue
                      </motion.div>
                      <motion.div
                        animate={{ opacity: isQueueOpen ? 1 : 0 }}
                        className="ml-auto"
                      >
                        <Badge variant="secondary" className="text-[9px] h-4 px-1.5">Active</Badge>
                      </motion.div>
                    </div>

                    <div className="flex-1 p-2 space-y-2 overflow-y-auto">
                      {jobs.map((job) => (
                        <div key={job.id} className="p-2 rounded border border-foreground/5 bg-card/30 flex flex-col justify-center relative overflow-hidden group">
                          {/* Progress bar background */}
                          <div 
                            className="absolute bottom-0 left-0 h-0.5 bg-primary/20 transition-all duration-500" 
                            style={{ width: `${job.progress}%` }}
                          />
                          
                          <div className="flex items-center gap-3">
                            <div className="shrink-0">
                              {job.status === "processing" && <Loader2 className="w-3 h-3 text-primary animate-spin" />}
                              {job.status === "completed" && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                              {job.status === "queued" && <Clock className="w-3 h-3 text-muted-foreground" />}
                            </div>
                            <motion.div 
                              animate={{ opacity: isQueueOpen ? 1 : 0 }}
                              className="flex-1 min-w-0"
                            >
                              <div className="text-[10px] font-medium text-foreground truncate">{job.name}</div>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-[9px] text-muted-foreground capitalize">{job.status}</span>
                                <span className="text-[9px] text-muted-foreground">{job.progress}%</span>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default ProductShowcase;
