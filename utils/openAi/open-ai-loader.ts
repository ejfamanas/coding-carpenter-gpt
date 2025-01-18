import OpenAI from "openai";
import EnvLoader from "../env-loader";

export default class OpenAiLoader {
    private readonly openAI: OpenAI
    constructor() {
        this.openAI = new OpenAI({
            organization: EnvLoader.OPENAI_ORGANIZATION,
            project: EnvLoader.OPENAI_PROJECT,
            apiKey: EnvLoader.OPENAI_API_KEY
        })
    }

    public get OpenAI(): OpenAI {
        return this.openAI;
    }
}