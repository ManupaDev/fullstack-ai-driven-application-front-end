import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { JobApplication } from "@/lib/models/JobApplication";
import { getJobApplicationById } from "@/lib/services/api/jobApplications";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AdminJobApplicationPage() {
  const [jobApplication, setJobApplication] = useState<JobApplication | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const { applicationId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!applicationId) {
      return;
    }
    getJobApplicationById(applicationId)
      .then((data) => {
        setJobApplication(data as JobApplication);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [applicationId]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="py-4 flex flex-col gap-y-4">
      <Card className="bg-foreground">
        <CardHeader className="flex-row items-center gap-x-4">
          <CardTitle>{jobApplication?.fullName}</CardTitle>
          <Badge
            className={cn({
              "bg-red-500":
                jobApplication?.rating?.toLocaleLowerCase() === "bad",
              "bg-orange-400":
                jobApplication?.rating?.toLocaleLowerCase() === "moderate",
              "bg-teal-500":
                jobApplication?.rating?.toLocaleLowerCase() === "good",
            })}
          >
            {jobApplication?.rating}
          </Badge>
        </CardHeader>
      </Card>

      <Card className="p-4">
        {jobApplication!.answers.map((answer, i) => {
          return <p key={i}>{answer}</p>;
        })}
      </Card>
      <div>
        <Button onClick={() => navigate(-1)} variant="link">
          Back
        </Button>
      </div>
    </div>
  );
}

export default AdminJobApplicationPage;
