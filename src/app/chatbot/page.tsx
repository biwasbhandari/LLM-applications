"use client";
import React, { useState } from "react";
import { withMessageHistory, config } from "@/ai/tools/chatbot";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import GoBack from "@/components/reusable/GoBack";

const Page = () => {
  const [userInput, setUserInput] = useState<string | null>("");
  const [response, setResponse] = useState<string | null>("");

  const getMessage = async () => {
    const response = await withMessageHistory.invoke(
      {
        input: userInput,
      },
      config
    );

    const result = response.content;
    const formattedResult = JSON.stringify(result);

    setResponse(formattedResult);
    setUserInput("");
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Card className="p-4 gap-3 flex flex-col">
        <GoBack />
        <CardHeader>Simple Chatbot</CardHeader>
        <CardDescription>
          This chatbot can have a conversation and remember previous <br />
          interactions. I have yet to set custom sessionId to asish so it will{" "}
          <br />
          not remember you after refreshing.
        </CardDescription>

        <Input
          type="text"
          value={userInput || ""}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Your message will be here"
        />

        {userInput === "" ? (
          <Button onClick={getMessage} disabled>
            Type a message first
          </Button>
        ) : (
          <Button onClick={getMessage}>Send</Button>
        )}

        <CardContent>{response && <div>{response}</div>}</CardContent>
      </Card>
    </div>
  );
};

export default Page;
