import OpenAiLoader from "./open-ai-loader";
import {AGeneralGpt, IGeneralGpt} from "../models/general-gpt";

export default class OpenAiTester implements IGeneralGpt {
    private readonly openAI = OpenAiLoader.OpenAI
    private readonly defaultModel = "gpt-4";
    public async generateText(prompt: string, model: string = this.defaultModel): Promise<string> {
        const arr: Array<string> = [];
        try {
            const stream = await this.openAI.chat.completions.create({
                model: "gpt-4o-mini", // Use GPT-4 model
                messages: [
                    { role: "system", content: prompt },
                ],
                max_tokens: 100, // Limit the response length
                temperature: 0.7, // Control creativity
                stream: true,
            });

            for await (const chunk of stream) {
                arr.push(chunk.choices[0].delta.content || "");
            }
            return Promise.resolve(arr.join(""))
        } catch (e) {
            console.log(`${Date.now()}: An error has occurred connecting to OpenAI model: ${model} ${e}`);
            return Promise.resolve("");
        }
    }
    public async testInteractivity(prompt: string, model: string = this.defaultModel) {
        try {
            const response = await this.openAI.chat.completions.create({
                model,
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: prompt },
                ],
                stream: false,
                max_tokens: 100, // Limit the response length
                temperature: 0.7, // Control creativity
            });

            // Log the GPT-4 response
            console.log(`${model} response: ${response.choices[0].message?.content}`);
        } catch (e) {
            console.error(`${Date.now()}: An error has occurred connecting to OpenAI model: ${model} ${e}`);
        }
    }
}