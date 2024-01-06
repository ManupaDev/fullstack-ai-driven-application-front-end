export type Job = {
  _id: string;
  title: string;
  type: string;
  location: string;
};

export type JobDetails = {
  _id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  questions: string[];
};
