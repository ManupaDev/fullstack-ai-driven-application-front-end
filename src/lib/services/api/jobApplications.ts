import api from "./api";
import { toast } from "sonner";

export const applyForJob = async ({
  userId,
  fullName,
  jobId,
  answers,
}: {
  userId?: string;
  fullName?: string | null;
  jobId: string;
  answers: string[];
}) => {
  try {
    await api.post("jobApplications", {
      json: { userId, fullName, job: jobId, answers },
    });
    toast.success("Job Application Posted");
  } catch (error) {
    toast.error(error.message);
  }
};

export const getJobApllicationsForJob = async (id: string) => {
  const res = await api.get(`jobApplications?jobId=${id}`);
  const data = res.json();
  return data;
};
