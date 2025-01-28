import ColorModeToggle from "@/components/ColorModeToggle";
import { Button } from "@/components/ui/button";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <h1>Home Page Content</h1>
    </div>
  );
}
