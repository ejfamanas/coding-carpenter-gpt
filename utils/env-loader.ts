import * as dotenv from "dotenv";
// This needs to be here for now, using closure
// to make sure this gets run first by immediately invoking the function
(() => dotenv.config())();
enum OpenAiEnv {
    OPENAI_API_KEY = "OPENAI_API_KEY",
    OPENAI_ORGANIZATION = "OPENAI_ORGANIZATION",
    OPENAI_PROJECT = "OPENAI_PROJECT",
}

enum HuggingFaceEnv {
    HUGGINGFACE_API_KEY = "HUGGINGFACE_API_KEY"
}

export default class EnvLoader {
    public static get OPENAI_API_KEY(): string {
        return this.envVarLoader(OpenAiEnv.OPENAI_API_KEY);
    }

    public static get OPENAI_ORGANIZATION(): string {
        return this.envVarLoader(OpenAiEnv.OPENAI_ORGANIZATION);
    }

    public static get OPENAI_PROJECT(): string {
        return this.envVarLoader(OpenAiEnv.OPENAI_PROJECT);
    }

    public static get HUGGINGFACE_API_KEY(): string {
        return this.envVarLoader(HuggingFaceEnv.HUGGINGFACE_API_KEY)
    }

    private static envVarLoader(str: OpenAiEnv | HuggingFaceEnv): string {
        const envVar = process.env[str];
        if (!envVar) {
            this.missingVarError(str)
            return "";
        } else {
            return envVar;
        }
    }

    private static missingVarError(varName: string) {
        // TODO: replace with logger
        throw new Error(`${Date.now()}: ${varName} is missing in the .env file`);
    }
}
