import { Separator } from "@/components/ui/separator";
import JobHeader from "./_components/JobHeader";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function JobPage() {
  return (
    <main>
      <JobHeader />
      <div className="mt-4 py-4">
        <p>
          Surge Global is a digital consultancy that leverages marketing, data,
          and technology to help businesses grow. As Sri Lanka’s leading digital
          firm, we employ the best content, creative, design & engineering
          talent the country has to offer. Embracing a culture of transparency
          and equality in the workplace, we’ve built an environment helping Sri
          Lanka’s best marketing and creative talent thrive. Our team looks at
          untangling multivariate problems with an open mind and the willingness
          to constantly test and learn. With our headquarters in Colombo Sri
          Lanka, we help scale startups to Fortune 500 companies across the
          United States, United Kingdom, Australia, and Sri Lanka.
        </p>
      </div>
      <Separator />
      <div className="py-8">
        <h3>Tell us about your experience in development</h3>
        <Textarea className="mt-4" />
        <div className="mt-4">
          <Button>Submit</Button>
        </div>
      </div>
    </main>
  );
}

export default JobPage;
