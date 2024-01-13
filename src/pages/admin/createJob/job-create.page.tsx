import { useAuth } from "@clerk/clerk-react";

function JobCreatePage() {
  const auth = useAuth();
  console.log(auth);

  return (
    <div>
      
    </div>
  );
}

export default JobCreatePage;
