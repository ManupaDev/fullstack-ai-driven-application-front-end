import JobCard from "@/components/shared/JobCard";

function JobSection() {
  return (
    <section className="py-8">
      <h2>Available Jobs</h2>
      <div className="mt-4 flex flex-col gap-y-4">
        <JobCard
          title="Azure Security Consultant"
          company="Surge Global"
          type="Full-time"
          location="Colombo, Sri Lanka"
          pay={{ min: 2500, max: 4500 }}
        />
      </div>
    </section>
  );
}

export default JobSection;
