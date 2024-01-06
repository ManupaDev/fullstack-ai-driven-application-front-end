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
