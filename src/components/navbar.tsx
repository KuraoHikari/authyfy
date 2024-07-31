import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="h-14 border-b">
      <div className="h-full container flex justify-between items-center">
        <h3 className="text-xl font-semibold tracking-tight">
          <Link href={"/"}>Authy</Link>
        </h3>

        <ul className="flex items-center gap-x-4">
          <li>
            <Button asChild variant="outline" size={"sm"}>
              <Link href={"/auth/signin"}>Sign In</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="outline" size={"sm"}>
              <Link href={"/auth/signup"}>Sign Up</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
