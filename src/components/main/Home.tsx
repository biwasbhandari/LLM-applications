import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { LuArrowBigRight } from "react-icons/lu";
const Home = () => {
  return (
    <div>
      <Link href={`translator`}>
        <Button variant="link">
          <LuArrowBigRight /> <span>Simple Language Translator</span>
        </Button>
      </Link>
    </div>
  );
};

export default Home;
