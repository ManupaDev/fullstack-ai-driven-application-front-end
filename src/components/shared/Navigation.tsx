import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Navigation() {
  return (
    <nav className="flex py-4 justify-between items-center">
      <Link to={"/"}>Home</Link>
      <div className="flex gap-x-4 items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <Link to={"/sign-in"}>Sign In</Link>
          <Button asChild>
            <Link to={"/sign-up"}>Sign Up</Link>
          </Button>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navigation;
