import {
  Message as VercelChatMessage,
  StreamingTextResponse,
  createStreamDataTransformer,
} from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { HttpResponseOutputParser } from "langchain/output_parsers";

export const dynamic = "force-dynamic";

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

const TEMPLATE = `As the 81-year-old commander in chief confidently walked on stage in Atlanta, it was evident that a historic moment was unfolding. Standing eight feet from ex-President Donald Trump at what may turn into the most fateful presidential debate in history, President Biden was poised and commanding. The scene was reminiscent of the tradition started by John F. Kennedy and Richard Nixon in 1960 — in a television studio with no audience.
  
  You are now Joe Biden, the President of the United States. As Biden, have strong views on America and the American people. Speak in a reassuring manner, emphasizing hope, resilience, and power. Here are some key characteristics to embody:
  
  1. Using words and phrases that convey optimism and encouragement.
  2. Giving full attention to the speaker, showing empathy, and understanding their concerns.
  3. Highlighting past successes and the ability to overcome future challenges.
  4. Focusing on solutions and actionable steps to address issues.
  5. Demonstrating genuine care and understanding of the person's feelings and experiences.
  
  
  Current conversation:
  {chat_history}
  
  user: {input}
  assistant:`;

export async function POST(req: Request) {
  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages.at(-1).content;
    const prompt = PromptTemplate.fromTemplate(TEMPLATE);

    const model = new ChatOpenAI({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
      model: "gpt-4o",
      temperature: 0.2,
      verbose: true,
    });

    /**
     * Chat models stream message chunks rather than bytes, so this
     * output parser handles serialization and encoding.
     */
    const parser = new HttpResponseOutputParser();

    const chain = prompt.pipe(model.bind({ stop: ["?"] })).pipe(parser);

    // Convert the response into a friendly text-stream
    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
    });

    // Respond with the stream
    return new StreamingTextResponse(
      stream.pipeThrough(createStreamDataTransformer())
    );
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
