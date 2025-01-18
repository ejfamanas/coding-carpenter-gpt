import * as dotenv from "dotenv";
// This needs to be here for now
dotenv.config()

export enum OpenAiEnv {
    OPENAI_API_KEY = "OPENAI_API_KEY",
    OPENAI_ORGANIZATION = "OPENAI_ORGANIZATION",
    OPENAI_PROJECT = "OPENAI_PROJECT"
}

export default class EnvLoader {
    constructor() {

    }

    public static get OPENAI_API_KEY(): string {
        return this.envVarLoader(OpenAiEnv.OPENAI_API_KEY);
    }

    public static get OPENAI_ORGANIZATION(): string {
        return this.envVarLoader(OpenAiEnv.OPENAI_ORGANIZATION);
    }

    public static get OPENAI_PROJECT(): string {
        return this.envVarLoader(OpenAiEnv.OPENAI_PROJECT);
    }

    private static envVarLoader(str: OpenAiEnv): string {
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
