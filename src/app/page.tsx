import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={`basic`}>Basic LLM App using Langchain</Link>
    </div>
  );
};

export default page;
