import React from "react";
import PageLink from "../reusable/PageLink";
const Home = () => {
  return (
    <div>
      <PageLink link="/translator" text={"Simple Language translator"} />
      <PageLink link="/chatbot" text={"Simple Chatbot"} />
      <PageLink link="/bidenchat" text={"Political Biden Chatbot"} />
    </div>
  );
};

export default Home;
