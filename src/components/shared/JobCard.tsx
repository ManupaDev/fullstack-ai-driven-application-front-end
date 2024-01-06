import { Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type JobCardProps = {
  _id: string;
  title: string;
  type: string;
  location: string;
  isAdmin: boolean;
};

function JobCard({ title, type, location, _id, isAdmin }: JobCardProps) {
  return (
    <Link to={isAdmin ? `/admin/job/${_id}` : `/job/${_id}`} className="block">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
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
        </CardFooter>
      </Card>
    </Link>
  );
}

export default JobCard;
