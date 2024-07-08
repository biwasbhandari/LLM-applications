import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const GoBack = () => {
  return (
    <div>
      <Link href={`/`}>
        {" "}
        <Button variant="outline">
          <ArrowLeftIcon /> <span>Go back to main page.</span>
        </Button>
      </Link>
    </div>
  );
};

export default GoBack;
