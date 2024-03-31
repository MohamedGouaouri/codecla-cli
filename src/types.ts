
export type FunctionTemplate = {
    [key: string]: (functionName: string, inputs: string) => string
}

export type LanguageExtensions = {
    [key: string]: string
}

export interface BoilerplateCmdOptions {
    functionName: string,
    language: string,
    inputs: string,
}