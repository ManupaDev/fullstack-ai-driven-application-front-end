import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, CircleDollarSign } from "lucide-react";

function JobHeader() {
  return (
    <div>
      <h2>Software Engineer - Fullstack</h2>
      <h3 className="mt-1">Ascentic Pvt Ltd</h3>
      <div className="flex items-center gap-x-4 mt-4">
        <div className="flex items-center gap-x-2">
          <Briefcase />
          <span>Full-time</span>
        </div>
        <div className="flex items-center gap-x-2">
          <MapPin />
          <span>Rajagiriya, Sri Lanka</span>
        </div>
        <div className="flex items-center gap-x-2">
          <CircleDollarSign />
          <span>LKR 200,000 - 300,000/mo</span>
        </div>
      </div>
      <div className="gap-x-4 flex items-center mt-4">
        <Badge>NodeJS</Badge>
        <Badge>ReactJS</Badge>
        <Badge>AWS</Badge>
      </div>
    </div>
  );
}

export default JobHeader;
