import { Button } from "@/components/ui/button";
import JobPostsSection from "./_components/JobPostsSection";

function AdminJobPostsPage() {
  return (
    <div className="py-4">
      <div className="flex justify-end items-center">
        <Button>Post A Job</Button>
      </div>
      <JobPostsSection />
    </div>
  );
}

export default AdminJobPostsPage;
