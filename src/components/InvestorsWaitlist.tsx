import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xdkqzqpo");
  if (state.succeeded) {
      return <div className="text-center space-y-3"><p>Thanks for joining!</p></div>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold text-foreground block uppercase tracking-widest">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
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
            disabled={state.submitting}
          >
            Join Waitlist
          </Button>
    </form>
  );
}

const InvestorsWaitlist = () => {
  const { toast } = useToast();

  return (
    <section id="waitlist" className="py-20 px-12 md:px-20 bg-background">
      <div className="max-w-[600px] mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default InvestorsWaitlist;
