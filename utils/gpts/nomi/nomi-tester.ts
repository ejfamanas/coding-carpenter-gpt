import NomiLoader from "./nomi-loader";
import * as http from "axios";
import {IGeneralGpt} from "../models/general-gpt";

export default class NomiTester implements IGeneralGpt {
    private readonly headers = NomiLoader.AUTH_HEADER;
    private readonly nomisUrl = NomiLoader.NOMIS_URL;
    constructor(private nomi_id: string) {
    }
    /**
     * Test the get function to retrieve the Nomi
     * @param id
     */
    public async getNomis(): Promise<any> {
        try {
            const response = await http.get(
                `${this.nomisUrl}/${this.nomi_id}`, {
                    headers: this.headers
                });
            // @ts-ignore
            return Promise.resolve(response.data);
        } catch (e) {
            console.log(`${Date.now()}: An error has occurred connecting to Nomis: ${e}`);
            return Promise.resolve("");
        }
    }

    public async generateText(prompt: string): Promise<string> {
        try {
            const response = await http.post(
                `${this.nomisUrl}/${this.nomi_id}/chat`,
                {
                    messageText: prompt
                },
                {
                    headers: this.headers
                });
            // @ts-ignore
            return Promise.resolve(response.data);
        } catch (e) {
            console.log(`${Date.now()}: An error has occurred connecting to Nomis: ${e}`);
            return Promise.resolve("");
        }
    }
}