import { IOptions } from 'search-params';
import { URLParamsEncodingType } from './encoding';
import { Token } from './tokeniser';
export { URLParamsEncodingType };
export interface PathOptions {
    /**
     * Query parameters buiding and matching options, see
     * https://github.com/troch/search-params#options
     */
    queryParams?: IOptions;
    /**
     * Specifies the method used to encode URL parameters:
     *   - `'default': `encodeURIComponent` and `decodeURIComponent`
     *      are used but some characters to encode and decode URL parameters,
     *      but some characters are preserved when encoding
     *      (sub-delimiters: `+`, `:`, `'`, `!`, `,`, `;`, `'*'`).
     *   - `'uriComponent'`: use `encodeURIComponent` and `decodeURIComponent`
     *      for encoding and decoding URL parameters.
     *   - `'uri'`: use `encodeURI` and `decodeURI for encoding amd decoding
     *      URL parameters.
     *   - `'none'`: no encoding or decoding is performed
     *   - `'legacy'`: the approach for version 5.x and below (not recoomended)
     */
    urlParamsEncoding?: URLParamsEncodingType;
}
export interface InternalPathOptions {
    queryParams?: IOptions;
    urlParamsEncoding: URLParamsEncodingType;
}
export interface PathPartialTestOptions extends PathOptions {
    caseSensitive?: boolean;
    delimited?: boolean;
}
export interface PathTestOptions extends PathOptions {
    caseSensitive?: boolean;
    strictTrailingSlash?: boolean;
}
export interface PathBuildOptions extends PathOptions {
    ignoreConstraints?: boolean;
    ignoreSearch?: boolean;
}
export declare type TestMatch<T extends Record<string, any> = Record<string, any>> = T | null;
export declare class Path<T extends Record<string, any> = Record<string, any>> {
    static createPath<T extends Record<string, any> = Record<string, any>>(path: string, options?: PathOptions): Path<T>;
    path: string;
    tokens: Token[];
    hasUrlParams: boolean;
    hasSpatParam: boolean;
    hasMatrixParams: boolean;
    hasQueryParams: boolean;
    options: InternalPathOptions;
    spatParams: string[];
    urlParams: string[];
    queryParams: string[];
    params: string[];
    source: string;
    constructor(path: string, options?: PathOptions);
    isQueryParam(name: string): boolean;
    isSpatParam(name: string): boolean;
    test(path: string, opts?: PathTestOptions): TestMatch<T>;
    partialTest(path: string, opts?: PathPartialTestOptions): TestMatch<T>;
    build(params?: T, opts?: PathBuildOptions): string;
    private getParams;
    private urlTest;
}
export default Path;
