import JobCard from "@/components/shared/JobCard";
import { Job } from "@/lib/models/Job";
import { getAllJobs } from "@/lib/services/api/jobs";
import { useEffect, useState } from "react";

function JobSection() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getAllJobs()
      .then((data) => setJobs(data as Job[]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-8">
      <h2>Available Jobs</h2>
      <div className="mt-4 flex flex-col gap-y-4">
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            {...job}
          />
        ))}
      </div>
    </section>
  );
}

export default JobSection;
