import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatGroq } from "@langchain/groq";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";

const llmApi = async (description: string) => {
  const key = process.env.GOOGLE_API_KEY || process.env.VITE_GOOGLE_API_KEY;

  const llm = new ChatGroq({
    apiKey: key,
    model: "llama-3.3-70b-versatile",
  });

  // ✅ Match new alumni structure
  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      name: z.string().optional(),
      college: z.string().optional(),
      company: z.string().optional(),
      location: z.string().optional(),
      skills: z.union([z.string(), z.array(z.string())]).optional(),
      join_year: z.union([z.string(), z.number()]).optional(),
      passing_year: z.union([z.string(), z.number()]).optional(),
      role: z.string().optional(),
    })
  );

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      `You are extracting structured filters from user queries about alumni.
Always return JSON strictly matching the schema.
there maybe chances that user mi type something so you need to autocorrect the locations 
- If the query mentions a place (e.g., "in Japan"), map it to "location".
- If the query mentions a company, map it to "company".
- If the query mentions a college, map it to "college".
- If the query mentions skills, map them into the "skills" array.
- If the query mentions a year, map to "join_year" or "passing_year".
- If the query mentions a role, map to "role".

Schema: {format_instruction}
Query: {description}`
    ),
    llm,
    parser,
  ]);

  let response = await chain.invoke({
    description,
    format_instruction: parser.getFormatInstructions(),
  });

  // Normalize skills into array
  if (response.skills && typeof response.skills === "string") {
    response.skills = response.skills.split(",").map((s: string) => s.trim());
  }

  // Normalize years
  (["join_year", "passing_year"] as const).forEach((field) => {
    const value = response[field];
    if (value && typeof value === "string") {
      const parsed = parseInt(value, 10);
      if (!isNaN(parsed)) {
        response[field] = parsed as any;
      }
    }
  });

  return response;
};

export default llmApi;
