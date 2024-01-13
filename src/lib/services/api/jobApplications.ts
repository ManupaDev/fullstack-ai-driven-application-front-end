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
  const token = await window.Clerk.session.getToken();

  try {
    await api.post("jobApplications", {
      json: { userId, fullName, job: jobId, answers },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Job Application Posted");
  } catch (error) {
    toast.error("Error while sending job application");
  }
};

export const getJobApllicationsForJob = async (id: string) => {
  const token = await window.Clerk.session.getToken();

  const res = await api.get(`jobApplications?jobId=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.json();
  return data;
};

export const getJobApplicationById = async (id: string) => {
  const token = await window.Clerk.session.getToken();

  const res = await api.get(`jobApplications/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.json();
  return data;
};
