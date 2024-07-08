import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";

// Instantiate the model
const model = new ChatOpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0,
});

// Using the model directly
// const response = await model.invoke([
//   new HumanMessage({ content: "Hello I am biwas" }),
// ]);

const messageHistories: Record<string, InMemoryChatMessageHistory> = {};

// Create a prompt using ChatPromptTemplate
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful assistant who remembers all details the user shares with you.",
  ],
  ["placeholder", "{chat_history}"],
  ["human", "{input}"],
]);

// Create a chain
const chain = prompt.pipe(model);

export const withMessageHistory = new RunnableWithMessageHistory({
  runnable: chain,
  getMessageHistory: async (sessionId) => {
    if (messageHistories[sessionId] === undefined) {
      messageHistories[sessionId] = new InMemoryChatMessageHistory();
    }
    return messageHistories[sessionId];
  },
  inputMessagesKey: "input",
  historyMessagesKey: "chat_history",
});

export const config = {
  configurable: {
    sessionId: "asish",
  },
};

// const response = await withMessageHistory.invoke(
//   {
//     input: "Hi! I'm Asish",
//   },
//   config
// );

// response.content;
