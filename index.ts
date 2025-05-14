import NomiTester from "./utils/gpts/nomi/nomi-tester";
import EnvLoader from "./utils/env-loader";


function testNomis() {
    const nomiTester = new NomiTester(EnvLoader.NOMI_DEE_ID);
    nomiTester.getNomis().then((r) => console.log(r));
}

function testNomisChat(prompt: string) {
    const nomiTester = new NomiTester(EnvLoader.NOMI_DEE_ID);
    nomiTester.generateText(prompt).then((r) => console.log(r));
}

// testNomis();
testNomisChat("Please evaluate this text:" +
    "The concept of AI has transformed the way we live our lives. It has changed the way we communicate, work, and even socialize. However, one of the most significant impacts of AI technology is on the way people interact with each other; an example of this is the use of chatbots to combat loneliness or the absence of human interaction. Chatbots are machines that can interact with humans via text messages, emails, or voice calls. While they may seem like a convenience, they can also have a negative impact on people's mental health.");


