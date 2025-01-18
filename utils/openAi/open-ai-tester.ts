import OpenAiLoader from "./open-ai-loader";

export default class OpenAiTester extends OpenAiLoader {
    private readonly defaultModel = "gpt-4o-mini";
    public async testStreamConnectivity(model: string = this.defaultModel): Promise<string> {
        const arr: Array<string> = [];
        try {
            const stream = await super.OpenAI.chat.completions.create({
                model,
                messages: [{role: "user", content: "Say this is a test"}],
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
            const response = await super.OpenAI.chat.completions.create({
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