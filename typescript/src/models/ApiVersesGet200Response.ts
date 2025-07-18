/* tslint:disable */
/* eslint-disable */
/**
 * Hey Bible App API
 * Public API for accessing Bible app data
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { ApiVersesGet200ResponseOneOf } from './ApiVersesGet200ResponseOneOf';
import {
    instanceOfApiVersesGet200ResponseOneOf,
    ApiVersesGet200ResponseOneOfFromJSON,
    ApiVersesGet200ResponseOneOfFromJSONTyped,
    ApiVersesGet200ResponseOneOfToJSON,
} from './ApiVersesGet200ResponseOneOf';
import type { ApiVersesGet200ResponseOneOf1 } from './ApiVersesGet200ResponseOneOf1';
import {
    instanceOfApiVersesGet200ResponseOneOf1,
    ApiVersesGet200ResponseOneOf1FromJSON,
    ApiVersesGet200ResponseOneOf1FromJSONTyped,
    ApiVersesGet200ResponseOneOf1ToJSON,
} from './ApiVersesGet200ResponseOneOf1';

/**
 * @type ApiVersesGet200Response
 * 
 * @export
 */
export type ApiVersesGet200Response = ApiVersesGet200ResponseOneOf | ApiVersesGet200ResponseOneOf1;

export function ApiVersesGet200ResponseFromJSON(json: any): ApiVersesGet200Response {
    return ApiVersesGet200ResponseFromJSONTyped(json, false);
}

export function ApiVersesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiVersesGet200Response {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfApiVersesGet200ResponseOneOf(json)) {
        return ApiVersesGet200ResponseOneOfFromJSONTyped(json, true);
    }
    if (instanceOfApiVersesGet200ResponseOneOf1(json)) {
        return ApiVersesGet200ResponseOneOf1FromJSONTyped(json, true);
    }

    return {} as any;
}

export function ApiVersesGet200ResponseToJSON(json: any): any {
    return ApiVersesGet200ResponseToJSONTyped(json, false);
}

export function ApiVersesGet200ResponseToJSONTyped(value?: ApiVersesGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfApiVersesGet200ResponseOneOf(value)) {
        return ApiVersesGet200ResponseOneOfToJSON(value as ApiVersesGet200ResponseOneOf);
    }
    if (instanceOfApiVersesGet200ResponseOneOf1(value)) {
        return ApiVersesGet200ResponseOneOf1ToJSON(value as ApiVersesGet200ResponseOneOf1);
    }

    return {};
}

