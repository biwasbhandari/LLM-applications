import Link from "next/link";
import React from "react";
import { LuArrowBigRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";

interface PageLinkProps {
  link: string;
  text: string;
  icon?: React.ReactNode;
}

const PageLink: React.FC<PageLinkProps> = ({ link, text, icon }) => {
  return (
    <div>
      <Link href={link}>
        <Button variant="link">
          {icon || <LuArrowBigRight />} <span>{text}</span>
        </Button>
      </Link>
    </div>
  );
};

export default PageLink;
