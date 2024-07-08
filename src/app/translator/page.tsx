"use client";
import React, { useState } from "react";
import { generateResponse } from "@/ai/tools/basicPrompt";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ArrowLeftIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import GoBack from "@/components/reusable/GoBack";

const Translator = () => {
  const [res, setRes] = useState<string | null>(null);
  const [humanMessage, setHumanMessage] = useState<string>("");

  const displayContent = async () => {
    if (!humanMessage) {
      alert("Input cannot be empty");
    } else {
      const response = await generateResponse(humanMessage);
      setRes(response);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Card className="p-4 gap-3 flex flex-col">
        <GoBack />
        <CardHeader>Simple LLM App to translate English to Nepali</CardHeader>
        <CardDescription>
          I learned how to use Language <br />
          models, PromptTemplates, Outparsers, <br />
          LangChain Expression Language(LCEL).
        </CardDescription>
        <Input
          type="text"
          value={humanMessage}
          onChange={(e) => setHumanMessage(e.target.value)}
          required
        />
        <Button onClick={displayContent}>Generate</Button>
        <CardContent>
          {res ? <p>{res}</p> : "Response will be shown here"}
        </CardContent>
        <CardContent className="flex items-center justify-center gap-2">
          Find Code on my github:{" "}
          <span>
            <a
              href="https://github.com/biwasbhandari/LLM-applications/tree/main/src/app/translator"
              target="_blank"
            >
              <Button variant="outline">
                <GitHubLogoIcon /> <span> Biwas Bhandari</span>
              </Button>
            </a>
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export default Translator;
