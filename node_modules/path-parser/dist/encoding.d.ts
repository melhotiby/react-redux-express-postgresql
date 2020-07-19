/**
 * We encode using encodeURIComponent but we want to
 * preserver certain characters which are commonly used
 * (sub delimiters and ':')
 *
 * https://www.ietf.org/rfc/rfc3986.txt
 *
 * reserved    = gen-delims / sub-delims
 *
 * gen-delims  = ":" / "/" / "?" / "#" / "[" / "]" / "@"
 *
 * sub-delims  = "!" / "$" / "&" / "'" / "(" / ")"
              / "*" / "+" / "," / ";" / "="
 */
export declare type URLParamsEncodingType = 'default' | 'uri' | 'uriComponent' | 'none' | 'legacy';
export declare const encodeURIComponentExcludingSubDelims: (segment: string) => string;
export declare const encodeParam: (param: string | number | boolean, encoding: URLParamsEncodingType, isSpatParam: boolean) => string;
export declare const decodeParam: (param: string, encoding: URLParamsEncodingType) => string;
