/* tslint:disable */
/* eslint-disable */
/**
 * Hey Bible App API
 * Public API for accessing Bible app data
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { VersesGet200ResponseOneOfVerses } from './VersesGet200ResponseOneOfVerses';
import {
    VersesGet200ResponseOneOfVersesFromJSON,
    VersesGet200ResponseOneOfVersesFromJSONTyped,
    VersesGet200ResponseOneOfVersesToJSON,
    VersesGet200ResponseOneOfVersesToJSONTyped,
} from './VersesGet200ResponseOneOfVerses';

/**
 * Single verse response (when ID is specified)
 * @export
 * @interface VersesGet200ResponseOneOf
 */
export interface VersesGet200ResponseOneOf {
    /**
     * 
     * @type {VersesGet200ResponseOneOfVerses}
     * @memberof VersesGet200ResponseOneOf
     */
    verses?: VersesGet200ResponseOneOfVerses;
}

/**
 * Check if a given object implements the VersesGet200ResponseOneOf interface.
 */
export function instanceOfVersesGet200ResponseOneOf(value: object): value is VersesGet200ResponseOneOf {
    return true;
}

export function VersesGet200ResponseOneOfFromJSON(json: any): VersesGet200ResponseOneOf {
    return VersesGet200ResponseOneOfFromJSONTyped(json, false);
}

export function VersesGet200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersesGet200ResponseOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'verses': json['verses'] == null ? undefined : VersesGet200ResponseOneOfVersesFromJSON(json['verses']),
    };
}

export function VersesGet200ResponseOneOfToJSON(json: any): VersesGet200ResponseOneOf {
    return VersesGet200ResponseOneOfToJSONTyped(json, false);
}

export function VersesGet200ResponseOneOfToJSONTyped(value?: VersesGet200ResponseOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'verses': VersesGet200ResponseOneOfVersesToJSON(value['verses']),
    };
}

