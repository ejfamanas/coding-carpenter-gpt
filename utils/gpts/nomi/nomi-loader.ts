import EnvLoader from "../../env-loader";

export default class NomiLoader {
    public static get AUTH_HEADER() {
        return {
            Authorization: `${EnvLoader.NOMI_API_KEY}`,
            "Content-type": "application/json"
        }
    }

    public static get NOMIS_URL(): string {
        return "https://api.nomi.ai/v1/nomis"
    }
}