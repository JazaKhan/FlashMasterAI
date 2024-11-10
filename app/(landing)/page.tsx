import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
      <Link href="/sign-in" passHref>
          <Button>Sign In</Button>
        </Link>
        <Link href="/sign-up" passHref>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
