import HuggingFaceLoader from "./hugging-face-loader";
import * as http from "axios";
import {AGeneralGpt, IGeneralGpt} from "../models/general-gpt";

export default class HuggingFaceTester implements IGeneralGpt {
    private readonly headers = HuggingFaceLoader.AUTH_HEADER;
    private readonly FlanT5 = HuggingFaceLoader.FLANT5_URL;
    public async generateText(prompt: string): Promise<string> {
        try {
            // Make the HTTP POST request to Hugging Face API
            const response = await http.post(
                this.FlanT5,
                { inputs: prompt }, // The payload (input prompt)
                {
                    headers: this.headers
                }
            );
            // Parse the response and return the generated text
            // @ts-ignore
            return Promise.resolve(response.data[0]?.generated_text || 'No output generated')
        } catch (e) {
            console.log(`${Date.now()}: An error has occurred connecting to Hugging Face: ${e}`);
            return Promise.resolve("");

        }
    }
}