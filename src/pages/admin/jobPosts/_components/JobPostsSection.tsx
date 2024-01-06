import JobCard from "@/components/shared/JobCard";
import { Job } from "@/lib/models/Job";
import { getAllJobs } from "@/lib/services/api/jobs";
import { useEffect, useState } from "react";

function JobPostsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getAllJobs()
      .then((data) => setJobs(data as Job[]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-8">
      <h2>Current Job Postings</h2>
      <div className="mt-4 flex flex-col gap-y-4">
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} isAdmin={true}/>
        ))}
      </div>
    </section>
  );
}

export default JobPostsSection;
