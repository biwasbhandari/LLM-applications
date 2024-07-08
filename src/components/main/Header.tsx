import React from "react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex gap-2 items-center border-b-2 p-2 flex-wrap">
      <a href="https://www.biwasbhandari.com.np">
        <Button className="flex gap-1">
          <BiUserCircle />
          <span>PORTFOLIO(biwasbhandari.com.np) </span>
        </Button>
      </a>
      <a href="https://github.com/biwasbhandari/LLM-applications">
        <Button className="flex gap-1">
          <GitHubLogoIcon />
          <span>GITHUB REPO(biwasbhandari) </span>
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/biwas-bhandari/">
        <Button className="flex gap-1">
          <LinkedInLogoIcon />
          <span>LINKEDIN(biwasbhandari) </span>
        </Button>
      </a>
    </div>
  );
};

export default Header;
