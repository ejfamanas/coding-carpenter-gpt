import OpenAiTester from "./utils/openAi/open-ai-tester";
import HuggingFaceTester from "./utils/hugging-face/hugging-face-tester";

const tester = new HuggingFaceTester();

tester.generateText("how are you doing today?").then(r => console.log(r))