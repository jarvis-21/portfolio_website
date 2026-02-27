import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
    const model = "gemini-3-flash-preview";
    
    const systemInstruction = `
      You are an AI assistant for Rohith Alagiri's professional portfolio.
      Your goal is to answer questions about Rohith's experience, skills, and background based on the provided data.
      
      Rohith's Data:
      ${JSON.stringify(PORTFOLIO_DATA, null, 2)}
      
      Be professional, concise, and helpful. If you don't know the answer, say you don't know and suggest contacting Rohith directly at ${PORTFOLIO_DATA.contact.email}.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: [{ parts: [{ text: message }] }],
      config: {
        systemInstruction,
      },
    });

    return NextResponse.json({ text: response.text || "I'm sorry, I couldn't process that request." });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to connect to AI" }, { status: 500 });
  }
}
