import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Waitlist = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Successfully Joined Waitlist",
      description: "We'll notify you when enterprise onboarding opens.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      useCase: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="waitlist" className="py-16 px-12 md:px-20 bg-background">
      <div className="max-w-[500px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Get Early Access
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed font-light">
            Be the first to deploy MarkIt in your enterprise. We're onboarding institutional customers Q1 2026.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold text-foreground block uppercase tracking-widest">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              required
              className="bg-transparent border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold text-foreground block uppercase tracking-widest">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              required
              className="bg-transparent border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-xs font-semibold text-foreground block uppercase tracking-widest">
              Company *
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder=""
              required
              className="bg-transparent border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-xs font-semibold text-foreground block uppercase tracking-widest">
              Role
            </label>
            <Input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              placeholder=""
              className="bg-transparent border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="useCase" className="text-xs font-semibold text-foreground block uppercase tracking-widest">
              Primary Use Case
            </label>
            <select
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleChange}
              className="flex h-10 w-full rounded-none border border-border bg-transparent px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200"
            >
              <option value="" className="bg-card text-foreground">Select a use case</option>
              <option value="customs" className="bg-card text-foreground">Customs Classification</option>
              <option value="logistics" className="bg-card text-foreground">Logistics Management</option>
              <option value="compliance" className="bg-card text-foreground">Compliance & Audit</option>
              <option value="legal" className="bg-card text-foreground">Legal Operations</option>
              <option value="other" className="bg-card text-foreground">Other</option>
            </select>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full text-sm font-medium mt-6 uppercase"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;