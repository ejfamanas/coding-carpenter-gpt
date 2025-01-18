import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

// Set up the OpenAI API client
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Function to interact with GPT
async function generateText(prompt: string): Promise<void> {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003", // Or other models like gpt-4
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7, // Adjust creativity level
        });

        console.log("GPT Response:", response.data.choices[0].text);
    } catch (error) {
        console.error("Error with GPT API:", error);
    }
}

// Example usage
generateText("Write a TypeScript tutorial for beginners.");