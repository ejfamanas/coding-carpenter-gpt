import OpenAiLoader from "./open-ai-loader";

export default class OpenAiTester extends OpenAiLoader {
    public async testConnectivity(model: string = "gpt-4o-mini"): Promise<string> {
        const arr: Array<string> = [];
        const stream = await this.OpenAI.chat.completions.create({
            model,
            messages: [{role: "user", content: "Say this is a test"}],
            stream: true,
        });

        for await (const chunk of stream) {
            arr.push(chunk.choices[0].delta.content||"");
        }
        return Promise.resolve(arr.join(""))
    }
}