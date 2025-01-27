import EnvLoader from "../../env-loader";

export default class HuggingFaceLoader {
    public static get AUTH_HEADER() {
        return {
            Authorization: `Bearer ${EnvLoader.HUGGINGFACE_API_KEY}`,
            "Content-type": "application/json"
        }
    }

    public static get FLANT5_URL() {
        return "https://api-inference.huggingface.co/models/google/flan-t5-base";
    }
}