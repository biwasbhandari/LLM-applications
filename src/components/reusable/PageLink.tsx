import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

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
          {icon || <BiRightArrowAlt />} <span className="text-xl">{text}</span>
        </Button>
      </Link>
    </div>
  );
};

export default PageLink;
