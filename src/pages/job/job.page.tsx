import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { JobDetails } from "@/lib/models/Job";
import { applyForJob } from "@/lib/services/api/jobApplications";
import { getJobById } from "@/lib/services/api/jobs";
import { useUser } from "@clerk/clerk-react";
import { Briefcase, MapPin } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobPage() {
  const [job, setJob] = useState<JobDetails | null>(null);
  const user = useUser();

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const [answers, setAnswers] = useState(["", "", ""]);

  useEffect(() => {
    getJobById(id as string)
      .then((data) => {
        setJob(data as JobDetails);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  const handleQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[parseInt(e.target.name)] = e.target.value;
      return newAnswers;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyForJob({
      userId: user.user?.id,
      fullName: user.user?.fullName,
      jobId: id!,
      answers,
    });
  };

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div>
        <h2>{job?.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job?.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{job?.location}</span>
          </div>
        </div>
        {/* <div className="gap-x-4 flex items-center mt-4">
          <Badge>NodeJS</Badge>
          <Badge>ReactJS</Badge>
          <Badge>AWS</Badge>
        </div> */}
      </div>
      <div className="mt-4 py-4">
        <p>{job?.description}</p>
      </div>
      <Separator />
      <form className="py-8" onSubmit={handleSubmit}>
        {job?.questions.map((question, i) => {
          return (
            <div key={i} className="mt-4">
              <h3>{question}</h3>
              <Textarea
                className="mt-4"
                name={i.toString()}
                value={answers[i]}
                onChange={handleQuestionChange}
              />
            </div>
          );
        })}
        <Button type="submit" className="mt-8">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default JobPage;
