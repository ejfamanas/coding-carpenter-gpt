import OpenAiTester from "./utils/gpts/openAi/open-ai-tester";
import HuggingFaceTester from "./utils/gpts/hugging-face/hugging-face-tester";

const openAi = new OpenAiTester();
const flan = new HuggingFaceTester();
const arr = [openAi, flan]

for (const t of arr) {
    t.generateText("how are you today?").then((r) => console.log(r));
}

