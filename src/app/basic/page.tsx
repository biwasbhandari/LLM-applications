"use client";
import React, { useState } from "react";
import { generateResponse } from "@/utils/basicPrompt";

const Home = () => {
  const [res, setRes] = useState<string | null>(null);

  const displayContent = async () => {
    const response = await generateResponse();
    setRes(response);
  };

  return (
    <div>
      <h1>
        This is a simple LLM App with built with Langchain Expression Language{" "}
        <br />
        new SystemMessage("Translate the following from English into Italian."){" "}
        <br />
        new HumanMessage("I love you!"),
      </h1>
      <button onClick={displayContent}>Generate</button>
      {res && (
        <div>
          <h2>Response:</h2>
          <p>{res}</p>
        </div>
      )}

      <p>
        Find code in my github{" "}
        <span>
          <a href="https://github.com/biwasbhandari" target="_blank">
            Biwas Bhandari
          </a>
        </span>
      </p>
    </div>
  );
};

export default Home;
