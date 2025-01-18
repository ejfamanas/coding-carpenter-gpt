import OpenAiTester from "./utils/openAi/open-ai-tester";

const tester = new OpenAiTester();

tester.testConnectivity().then(d => console.log(d));