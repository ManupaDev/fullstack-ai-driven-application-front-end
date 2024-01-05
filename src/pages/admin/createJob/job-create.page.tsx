import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-react";

function JobCreatePage() {
  const auth = useAuth();
  console.log(auth);

  return (
    <div>
      <div className="p-4">
        <Button>Create Job</Button>
      </div>
    </div>
  );
}

export default JobCreatePage;
