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
      <h1>Simple LLM App</h1>
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
