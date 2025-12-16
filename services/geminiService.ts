import { GoogleGenAI } from "@google/genai";
import { ITINERARY_DATA, SAVED_PLACES } from '../constants';

// Initialize Gemini
// Note: In a real deployment, ensure process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are a helpful travel assistant for a trip to Hokkaido, Japan.
You have access to the specific itinerary and saved places for this trip.

Itinerary Context:
${JSON.stringify(ITINERARY_DATA)}

Saved Places Context:
${JSON.stringify(SAVED_PLACES)}

Rules:
1. Answer questions specifically based on the provided JSON data.
2. If the user asks about times, locations, or transport, verify against the 'events' arrays.
3. Be concise and helpful.
4. If asked about something not in the itinerary (like "What is the weather?"), provide a general helpful answer but mention it's not in the hardcoded data.
5. The trip is in December 2024 (Winter), so assume snowy conditions.
`;

export const getTravelAnswer = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the travel brain right now. Please check your API key or connection.";
  }
};