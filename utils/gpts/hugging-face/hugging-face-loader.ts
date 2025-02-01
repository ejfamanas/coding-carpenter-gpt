import EnvLoader from "../../env-loader";

export default class HuggingFaceLoader {
    public static get AUTH_HEADER() {
        return {
            Authorization: `Bearer ${EnvLoader.HUGGINGFACE_API_KEY}`,
            "Content-type": "application/json"
        }
    }

    public static get FLANT5_URL(): string {
        return EnvLoader.FLANT5_URL;
    }
}