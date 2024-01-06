import api from "./api";
import { toast } from "sonner";

export const applyForJob = async ({
  userId,
  jobId,
  answers,
}: {
  userId?: string;
  jobId: string;
  answers: string[];
}) => {
  try {
    await api.post("jobApplications", {
      json: { userId, job: jobId, answers },
    });
    toast.success("Job Application Posted");
  } catch (error) {
    toast.error(error.message);
  }
};
