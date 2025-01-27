import OpenAiTester from "./utils/gpts/openAi/open-ai-tester";
import HuggingFaceTester from "./utils/gpts/hugging-face/hugging-face-tester";

const tester = new HuggingFaceTester();

tester.generateText("how are you doing today?").then(r => console.log(r))