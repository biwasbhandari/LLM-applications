import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";

const chatModel = new ChatOpenAI({
  model: "gpt-4",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const praser = new StringOutputParser();

export const generateResponse = async (humanMessage: string) => {
  const messages = [
    new SystemMessage("Translate the following from English into Nepali."),
    new HumanMessage(humanMessage),
  ];

  const response = await chatModel.invoke(messages);
  const formattedResponse = await praser.invoke(response);
  console.log(formattedResponse);
  return formattedResponse;
};
