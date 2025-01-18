import OpenAiLoader from "./open-ai-loader";

export default class OpenAiTester extends OpenAiLoader {
    public async testConnectivity() {
        const stream = await this.OpenAI.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{role: "user", content: "Say this is a test"}],
            stream: true,
        });

        for await (const chunk of stream) {
            process.stdout.write(chunk.choices[0]?.delta?.content || "");
        }
    }
}