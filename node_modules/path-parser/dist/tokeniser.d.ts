export interface Token {
    type: string;
    match: string;
    val: any;
    otherVal: any;
    regex?: RegExp;
}
declare const tokenise: (str: string, tokens?: Token[]) => Token[];
export default tokenise;
