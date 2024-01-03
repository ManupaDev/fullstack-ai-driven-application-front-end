import { Briefcase, CircleDollarSign, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type JobCardProps = {
  title: string;
  company: string;
  type: string;
  location: string;
  pay: {
    min: number;
    max: number;
  };
};

function JobCard({ title, company, type, location, pay }: JobCardProps) {
  return (
    <Link to={"/job/123"} className="block">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{company}</CardDescription>
          </div>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="gap-x-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CircleDollarSign />
            <span>
              $ {pay.min} - {pay.max}/mo
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default JobCard;
