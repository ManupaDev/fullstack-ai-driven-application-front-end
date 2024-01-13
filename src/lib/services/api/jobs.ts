import { toast } from "sonner";
import api from "./api";

export const getAllJobs = async () => {
  const res = await api.get("jobs");
  const data = res.json();
  return data;
};

export const getJobById = async (id: string) => {
  const res = await api.get(`jobs/${id}`);
  const data = res.json();
  return data;
};

export const createJobPosting = async ({
  title,
  description,
  type,
  location,
  questions,
}: {
  title: string;
  description: string;
  type: string;
  location: string;
  questions: string[];
}) => {
  try {
    await api.post("jobs", {
      json: { title, description, type, location, questions },
    });
    toast.success("Job Posting Created");
  } catch (error) {
    toast.error("Error while creating job post");    
  }
};
