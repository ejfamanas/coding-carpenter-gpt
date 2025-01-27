export interface IGeneralGpt {
    readonly generateText: (str: string) => Promise<string>;
}

export abstract class AGeneralGpt implements IGeneralGpt {
    protected async generateText(str: string): Promise<string>
}