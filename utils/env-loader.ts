import * as dotenv from "dotenv";

export default class EnvLoader {
    private readonly apiKey: string;
    constructor() {
        dotenv.config()
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error("OPENAI_API_KEY is missing in the .env file");
        } else {
            this.apiKey = apiKey;
        }
    }

    public get API_KEY() {
        return this.apiKey
    }
}
