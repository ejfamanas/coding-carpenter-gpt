import OpenAI from "openai";
import EnvLoader from "../env-loader";

export default class OpenAiLoader {
    public static get OpenAI(): OpenAI {
        return new OpenAI({
            organization: EnvLoader.OPENAI_ORGANIZATION,
            project: EnvLoader.OPENAI_PROJECT,
            apiKey: EnvLoader.OPENAI_API_KEY
        });
    }
}