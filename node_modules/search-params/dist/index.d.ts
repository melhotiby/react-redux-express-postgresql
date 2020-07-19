import { IOptions } from './encode';
export { IOptions };
export declare type SearchParams = Record<string, string | boolean | null | Array<string | boolean | null> | undefined>;
/**
 * Parse a querystring and return an object of parameters
 */
export declare const parse: <T extends Record<string, any> = Record<string, string | boolean | (string | boolean | null)[] | null | undefined>>(path: string, opts?: IOptions | undefined) => T;
/**
 * Build a querystring from an object of parameters
 */
export declare const build: <T extends Record<string, any> = Record<string, string | boolean | (string | boolean | null)[] | null | undefined>>(params: T, opts?: IOptions | undefined) => string;
export interface IOmitResponse {
    querystring: string;
    removedParams: object;
}
/**
 * Remove a list of parameters from a querystring
 */
export declare const omit: (path: string, paramsToOmit: string[], opts?: IOptions | undefined) => IOmitResponse;
export interface IKeepResponse {
    querystring: string;
    keptParams: object;
}
/**
 * Remove a list of parameters from a querystring
 */
export declare const keep: (path: string, paramsToKeep: string[], opts?: IOptions | undefined) => IKeepResponse;
